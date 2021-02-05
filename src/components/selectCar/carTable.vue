<template>
  <div>
    <div slot="header" class="clearfix headerBox">
      <el-button
        size="big"
        style="float: right; padding: 3px 0;"
        type="text"
      >已选中{{chooseCarList.length}}辆</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="80px" inline>
      <el-form-item label="所属路线">
        <el-select
          ref="select_element"
          clearable
          :value="groupTitles"
          @clear="clearSelect"
          placeholder="请选择"
        >
          <el-option :value="companyName" :label="companyName" class="options">
            <el-tree
              id="tree-option"
              ref="selectTree"
              accordion
              :data="companyTree"
              :props="defaultProps"
              node-key="id"
              :default-expanded-keys="defaultExpandedKey"
              show-checkbox
              @check="handleCheck"
            ></el-tree>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-input v-model="form.keyWord" placeholder="输入车牌号" clearable></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="medium" @click="onSearch">搜索</el-button>
        <el-button type="primary" size="medium" @click="reset">重置</el-button>
        <el-button v-if="chooseType == 2" size="medium" @click="clear">清空</el-button>
        <el-button v-if="chooseType == 1" size="medium" @click="clearMultiple">清空</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      height="400"
      max-height="400"
      :row-key="getRowKey"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" :reserve-selection="true" v-if="chooseType == 1"></el-table-column>
      <el-table-column label width="65" v-if="chooseType == 2" fixed="left">
        <template slot-scope="scope">
          <el-radio
            :label="scope.row.id"
            v-model="templateRadio"
            @change.native="getTemplateRow(scope.$index,scope.row)"
          >&nbsp;</el-radio>
        </template>
      </el-table-column>
      <el-table-column type="index" label="序号" fixed="left" width="100"></el-table-column>
      <el-table-column prop="name" label="车牌号" fixed="left" width="150"></el-table-column>
      <el-table-column
        prop="groupName"
        label="所属公司"
        fixed="left"
        width="200"
        :show-overflow-tooltip="true"
      ></el-table-column>
      <el-table-column prop="decph" fixed="left" label="车牌颜色"></el-table-column>
    </el-table>

    <!-- 操作 -->
    <div class="pagination" style="height: 30px">
      <div style="float:right;margin-left: 15px;">
        <el-button size="medium" type="primary" @click="cancle">取消</el-button>
        <el-button
          v-if="chooseType == 1"
          size="medium"
          type="primary"
          @click="toggleAllCar"
          :loading="toggleAllCarLoading"
        >{{chooseCarList.length!=0 && chooseCarList.length==total ? "全不选" :"全选"}}</el-button>
        <el-button size="medium" type="primary" @click="confirm">确定</el-button>
      </div>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="form.currentPage"
        :page-size="form.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :pager-count="5"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
// import { getvehGroup, getTreeVhicle } from "@/api/lib/api_gps";

export default {
  props: {
    chooseList: {
      //已选中的车辆
      type: Array,
      default: function() {
        return [];
      }
    },
    /*选择的类型   1 多选  2单选*/
    chooseType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      chooseCarList: [], //选中的车辆
      tableData: [],
      form: {
        currentPage: 1,
        pageSize: 10,
        keyWord: ""
      },
      companyName: "",
      companyTree: [],
      defaultProps: {
        children: "children",
        label: "name"
      },
      defaultExpandedKey: [],
      groupIds: [],
      groupTitles: "",
      total: 0,
      toggleAllCarLoading: false, //全选时按钮loading
      showRow: false, //分页切换时
      templateRadio: ""
    };
  },
  created() {
    //获取公司树形结构
    getvehGroup({}).then(res => {
      this.companyTree = res.data;
      this.initScroll();
    });
  },
  watch: {
    chooseList(curVal, oldVal) {
      if (curVal.length > 0) {
        this.chooseCarList = [...this.chooseList]; //已选中的值赋值
        this.search(1);
      }
    }
  },
  mounted() {
    if (this.chooseList.length > 0) {
      this.chooseCarList = [...this.chooseList]; //已选中的值赋值
      this.search(1);
    }
  },
  methods: {
    /* 单选时取消选中 */
    clear() {
      this.chooseCarList = [];
      this.templateRadio = "";
    },
    /* 多选时取消选中 */
    clearMultiple() {
      this.chooseCarList = [];
      this.$refs.multipleTable.clearSelection(); //当前页选中清空
    },
    /* 初始化滚动条 */
    initScroll() {
      this.$nextTick(() => {
        let scrollWrap = document.querySelectorAll(
          ".el-scrollbar .el-select-dropdown__wrap"
        )[0];
        let scrollBar = document.querySelectorAll(
          ".el-scrollbar .el-scrollbar__bar"
        );
        scrollWrap.style.cssText =
          "margin: 0px; max-height: none; overflow: hidden;";
        scrollBar.forEach(ele => (ele.style.width = 0));
      });
    },
    /* 指定一个key标识这一行的数据 */
    getRowKey(row) {
      return row.id;
    },
    /* 点击搜索 */
    onSearch(flag) {
      this.form.pageSize = 10;
      this.form.currentPage = 1;
      this.total = 0;
      this.search();
    },
    /* 搜索数据 */
    search(type) {
      let self = this;
      let data = self.form;
      data.groupIds = self.groupIds;
      getTreeVhicle(data).then(res => {
        self.tableData = res.data.list;
        self.total = res.data.total;
        if (type) {
          //切换分页选中数据回显 / 进入页面数据回显
          this.toggleRowSelection(res.data.list, self.chooseCarList);
        }
      });
    },
    /**选中数据回显
     * data {array} 当前页table数据
     * list {array} 需要回显的数据
     */
    toggleRowSelection(data, list) {
      let self = this;
      if (this.chooseType === 1) {
        //多选
        data.forEach(element => {
          let data = list.find(v => v.id === element.id);
          if (data) {
            self.showRow = true;
            self.$refs.multipleTable.toggleRowSelection(data, true);
          }
        });
      } else {
        if (list.length > 0) this.templateRadio = list[0].id;
      }
    },
    /**点击复选框 */
    handleCheck(data, checkedNodes) {
      let name = [];
      this.groupIds = checkedNodes.checkedKeys;
      checkedNodes.checkedNodes.forEach(item => {
        name.push(item.name);
      });
      this.groupTitles = name.join(",");
    },
    /* 清空选择项 */
    clearSelect() {
      this.groupIds = [];
      this.groupTitles = "";
      this.defaultExpandedKey = [];
      this.clearSelected();
    },
    /* 清空选中样式 */
    clearSelected() {
      let allNode = document.querySelectorAll("#tree-option .el-tree-node");
      allNode.forEach(element => element.classList.remove("is-current"));
    },
    /* 表单重置 */
    reset() {
      this.clearSelect();
      this.form.keyWord = "";
    },
    /* 分页参数修改 */
    handleSizeChange(val) {
      this.form.pageSize = val;
      this.form.currentPage = 1;
      if (this.tableData.length > 0) {
        this.search(1);
      }
    },
    /* 分页参数修改 */
    handleCurrentChange(val) {
      this.form.currentPage = val;
      if (this.tableData.length > 0) {
        this.search(1);
      }
    },
    /* 多选时 点击选择单行数据  */
    selectRow(selection, row) {
      let index = this.chooseCarList.findIndex(v => v.id === row.id);
      if (!this.showRow) {
        if (index > -1) {
          //有找到此节点表示已选中
          this.chooseCarList.splice(
            this.chooseCarList.findIndex(v => v.id === row.id),
            1
          );
        } else {
          this.chooseCarList = this.chooseCarList.concat([row]);
        }
      }
      this.showRow = false;
    },
    /* 有选择项改变时  table全选/全不选*/
    handleSelectionChange(val) {
      //取消选中
      if (val.length == 0) {
        this.tableData.forEach(element => {
          this.chooseCarList.splice(
            this.chooseCarList.findIndex(v => v.id === element.id),
            1
          );
        });
      } else {
        //选中
        let arr = this.chooseCarList.concat(val);
        // self:表示该数组对象
        // x: 表示当前对象
        // index: 表示当前元素下标
        this.chooseCarList = arr.filter((x, index, self) => {
          let arrids = [];
          arr.forEach((item, i) => {
            arrids.push(item.id);
          });
          return arrids.indexOf(x.id) === index;
        });
      }
    },
    /* 底部按钮全选/全不选 */
    toggleAllCar() {
      if (this.tableData.length === 0 && this.form.currentPage === 1) {
        this.$message({
          message: "车辆列表为空",
          type: "warning"
        });
        return;
      }
      this.toggleAllCarLoading = true;
      //全不选
      if (
        this.chooseCarList.length === this.total &&
        this.chooseCarList.length > 0
      ) {
        this.$refs.multipleTable.clearSelection();
        this.chooseCarList = [];
        this.toggleAllCarLoading = false;
      } else {
        //全选
        let self = this;
        let data = self.form;
        data.groupIds = self.groupIds;
        data.pageSize = this.total;
        data.currentPage = 1;
        getTreeVhicle(data).then(res => {
          self.$refs.multipleTable.clearSelection(); //当前页选中清空
          self.$refs.multipleTable.toggleAllSelection();
          self.chooseCarList = res.data.list;
          this.toggleAllCarLoading = false;
        });
      }
    },
    /* 单选表格 获取选中单行数据 */
    getTemplateRow(index, row) {
      this.chooseCarList = [row];
    },
    /* 确定 */
    confirm() {
      this.$emit("getCurrentCar", 1, this.chooseCarList);
    },
    /* 取消 */
    cancle() {
      this.$emit("getCurrentCar", 0);
    }
  }
};
</script>

<style scoped>
.headerBox {
  position: absolute;
  top: 90px;
  right: 18px;
}
.headerBox .el-button {
  font-size: 18px;
}
.el-scrollbar .el-scrollbar__view .el-select-dropdown__item {
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected {
  font-weight: normal;
}
ul li >>> .el-tree .el-tree-node__content {
  height: auto;
  padding: 0 20px;
}
.el-tree-node__label {
  font-weight: normal;
}
.el-tree >>> .is-current .el-tree-node__label {
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
  font-weight: normal;
}
.marginRight20 {
  margin-right: 20px;
}
.lable {
  width: 96px;
  white-space: nowrap;
  font-size: 16px;
}
.el-form-item__label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
</style>
