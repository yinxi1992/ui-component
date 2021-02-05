<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageObj.currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :background="background"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    background: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      pageObj: {
        pageSize: 10,
        currentPage: 1
      }
    };
  },

  methods: {
    handleSizeChange(val) {
      this.pageObj.pageSize = val;
      this.$emit("getPageData", this.pageObj);
    },
    handleCurrentChange(val) {
      this.pageObj.currentPage = val;
      this.$emit("getPageData", this.pageObj);
    }
  }
};
</script>

<style lang='scss'>
div.pagination {
  margin-top: 15px;
}
</style>
