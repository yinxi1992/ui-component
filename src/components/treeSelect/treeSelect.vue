<template>
  <el-select ref="select_element" :value="valueTitle" :clearable="clearable" @clear="clearHandle">
    <el-option :value="valueTitle" :label="valueTitle" class="options">
      <el-tree
        id="tree-option"
        ref="selectTree"
        :accordion="accordion"
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
// import { getCompaniesTree } from "@/api/lib/api";

export default {
  name: "el-tree-select",

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
    /* 选项列表数据(树形结构的对象数组) */
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /* 初始值 */
    value: {
      type: Number,
      default: () => {
        return null;
      }
    },
    /* 初始显示 */
    valueName: {
      type: String,
      default: () => {
        return null;
      }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    /* 自动收起 */
    accordion: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    /* 是否有默认值 */
    isNeedDefaultValue: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },

  created() {
    //获取公司树形结构
    // getCompaniesTree({}).then(res => {
    //   this.companyTree = res.data;
    //   this.initHandle();
    //   if (this.isNeedDefaultValue && !this.valueId) {
    //     this.valueTitle = res.data[0].label;
    //     this.valueId = res.data[0].id;
    //     this.$emit("getValue", this.valueId);
    //   }
    // });
    this.companyTree = [{"children":[{"children":[],"id":9,"label":"测试","line":false,"parentId":1},{"children":[],"id":115,"label":"广运集团1","line":false,"parentId":1},{"children":[],"id":116,"label":"测试公司001","line":false,"parentId":1},{"children":[],"id":134,"label":"正式公司","line":false,"parentId":1},{"children":[],"id":141,"label":"公司001","line":false,"parentId":1},{"children":[],"id":143,"label":"运行13","line":false,"parentId":1},{"children":[],"id":161,"label":"C11","line":false,"parentId":1}],"id":1,"label":"英海瑞特","line":false,"parentId":0}]
  },

  data() {
    return {
      valueId: this.value, // 初始值
      valueTitle: "",
      defaultExpandedKey: [],
      companyTree: []
    };
  },

  methods: {
    // 初始化值
    initHandle() {
      if (this.valueId) {
        this.valueTitle = this.valueName; // 初始化显示
        this.defaultExpandedKey = [this.valueId]; // 设置默认展开
        // setTimeout(() => {
        //   console.log(this.$refs.selectTree.getNode(1));
        // }, 0);
      }
      this.initScroll();
    },
    // 初始化滚动条
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
    // 切换选项
    handleNodeClick(node) {
      this.valueTitle = node[this.props.label];
      this.valueId = node[this.props.value];
      this.$emit("getValue", this.valueId);
      this.defaultExpandedKey = [];
      this.$refs.select_element.blur();
    },
    // 清除选中
    clearHandle() {
      this.valueTitle = "";
      this.valueId = null;
      this.defaultExpandedKey = [];
      this.clearSelected();
      this.$emit("getValue", null);
    },
    /* 清空选中样式 */
    clearSelected() {
      let allNode = document.querySelectorAll("#tree-option .el-tree-node");
      allNode.forEach(element => element.classList.remove("is-current"));
    }
  },

  watch: {
    value() {
      this.valueId = this.value;
      this.initHandle();
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
  color: #409eff;
  font-weight: 700;
}
.el-tree >>> .is-current .el-tree-node__children .el-tree-node__label {
  color: #606266;
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
