<template>
  <el-select
    ref="select_element"
    :value="valueTitle"
    :clearable="clearable"
    @clear="resetForm"
    placeholder="请选择"
  >
    <el-option :value="valueTitle" :label="valueTitle" class="options">
      <el-tree
        @check="getKeys"
        :show-checkbox="multiple"
        id="tree-option"
        ref="selectTree"
        :data="companyTree"
        :props="props"
        :node-key="props.value"
        :default-expanded-keys="defaultExpandedKey"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-option>
  </el-select>
</template>

<script>
// import { companyTreeNode } from "@/api/api.js";
export default {
  props: {
    /* 配置项 */
    props: {
      type: Object,
      default: () => {
        return {
          value: "id", // ID字段名
          label: "label", // 显示名称
          children: "children" // 子级字段名
        };
      }
    },

    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    /* 多选 */
    multiple: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  created() {
    //获取公司树形结构
    // companyTreeNode({}).then(res => {
    //   this.companyTree = res.data;
    //   /**默认展开所有 */
    //   this.setDefaultExpandedKey(res.data); // 设置默认选中
    //   this.initScroll();
    // });
     this.companyTree = [{"children":[{"children":[],"id":9,"label":"测试","line":false,"parentId":1},{"children":[],"id":115,"label":"广运集团1","line":false,"parentId":1},{"children":[],"id":116,"label":"测试公司001","line":false,"parentId":1},{"children":[],"id":134,"label":"正式公司","line":false,"parentId":1},{"children":[],"id":141,"label":"公司001","line":false,"parentId":1},{"children":[],"id":143,"label":"运行13","line":false,"parentId":1},{"children":[],"id":161,"label":"C11","line":false,"parentId":1}],"id":1,"label":"英海瑞特","line":false,"parentId":0}]
  },

  data() {
    return {
      valueId: null, // 初始值
      valueTitle: "",
      defaultExpandedKey: [],
      companyTree: []
    };
  },

  methods: {
    /**默认展开所有 */
    setDefaultExpandedKey(res) {
      for (let i = 0; i < res.length; i++) {
        const element = res[i];
        this.defaultExpandedKey.push(element[this.props.value]); // 设置默认展开
        if (element.children) {
          element.children.map(item => {
            this.defaultExpandedKey.push(item[this.props.value]); // 设置默认展开
          });
        }
      }
    },

    /**多选时checked点击事件*/
    getKeys(data, checked) {
      if (checked.checkedNodes.length !== 0) {
        if (checked.checkedNodes.length == 1) {
          this.valueTitle = checked.checkedNodes[0].label;
        } else {
          let str = "";
          checked.checkedNodes.map(item => {
            str += `${item.label},`;
          });
          this.valueTitle = str;
        }
      } else {
        this.valueTitle = "";
      }
      this.$emit("getValue", checked.checkedKeys);
    },

    /**初始化滚动条*/
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
    /**切换选项*/

    handleNodeClick(node) {
      /**非多选情况下才执行nodeclick事件*/
      if (!this.multiple) {
        this.valueTitle = node[this.props.label];
        this.valueId = node[this.props.value];
        this.$emit("getValue", [this.valueId]);
        this.$emit("getName", this.valueTitle);
        this.defaultExpandedKey = [];

        this.$refs.select_element.blur();
      }
    },
    /**公司可多选与可单选切换时，清空input */
    resetForm() {
      this.valueTitle = "";
      this.valueId = null;
      this.defaultExpandedKey = [];
      this.clearSelected();
      this.$emit("getValue", []);
      this.$emit("getName", null);
    },
    /* 清空选中样式 */
    clearSelected() {
      this.$refs.selectTree.setCheckedNodes([]); // 设置默认选中
      let allNode = document.querySelectorAll("#tree-option .el-tree-node");
      allNode.forEach(element => element.classList.remove("is-current"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #4b8dfd;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #dfdfdf;
  font-weight: normal;
}

/* 开发禁用 */
/* .el-tree-node:focus>.el-tree-node__content{
    background-color:transparent;
    background-color: #f5f7fa;
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .el-tree-node__content:hover{
    background-color: #f5f7fa;
  } */
</style>
