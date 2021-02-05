<template>
  <div class="report_table">
    <div :style="tableHieght?`height:${tableHieght}`:''" class="tableDiv">
      <el-table
        :header-cell-style="{color:'#333'}"
        :border="border"
        style="width: 100%"
        :data="dataArr"
        :fit="true"
        class="table_con"
      >
        <el-table-column type="index" label="序号" fixed="left" width="100"></el-table-column>
        <div v-if="dataArr && dataArr.length>0">
          <el-table-column
            v-for="(value,key,index) in headerObj"
            :label="value"
            :prop="key"
            :key="index"
            :show-overflow-tooltip="true"
            :formatter="formatNull"
          ></el-table-column>
        </div>
        <div v-else>
          <el-table-column
            v-for="(value,key,index) in headerObj"
            :label="value"
            :prop="key"
            :key="index"
            :show-overflow-tooltip="true"
          ></el-table-column>
        </div>
      </el-table>
    </div>
    <div class="pagination" v-if="showPagination" :class="paginationHeight">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pageObj.currentPage"
        :page-sizes="[10,20,30, 40]"
        :page-size="pageObj.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /*表格内容数据 */
    dataArr: {
      type: Array,
      default: function() {
        return [];
      }
    },
    /*表头数据 */
    headerObj: {
      type: Object,
      default: function() {
        return {};
      }
    },
    /**表格数据的总条数 */
    total: {
      type: Number,
      default: 0
    },
    /**当前页 */
    pageIndex: {
      type: Number,
      default: 1
    },
    /**是否显示分页组件 */
    showPagination: {
      type: Boolean,
      default: true
    },
    /**表格是否是border表格 */
    border: {
      type: Boolean,
      default: true
    },
    /**表格高度 */
    paginationHeight: {
      type: String,
      default: ""
    },
    /**分页高度 */
    tableHieght: {
      type: String,
      default: ""
    }
  },
  watch: {
    headerObj: {
      handler(newV, oldV) {}
    }
  },
  data() {
    return {
      pageObj: {
        currentPage: 1,
        pageSize: 10
      }
    };
  },

  methods: {
    /**查询时,分页参数还原 */
    reset() {
      this.pageObj.pageSize = 10;
      this.pageObj.currentPage = 1;
    },
    /**获取表头 */
    getLableName(v) {
      return this.headerObj[v];
    },
    /**数据为空默认显示- */
    formatNull(row, column, cellValue) {
      return cellValue == null || cellValue == "" ? "-" : cellValue;
    },

    /** 分页参数切换*/
    handleSizeChange(val) {
      this.pageObj.pageSize = val;
      this.pageObj.currentPage = 1;
      this.$emit("sendInfo", this.pageObj);
    },
    /**分页参数切换 */
    handleCurrentChange(val) {
      this.pageObj.currentPage = val;
      this.$emit("sendInfo", this.pageObj);
    }
  }
};
</script>

<style lang='scss'>
</style>
