<template>
  <div class="serchForm">
    <el-row>
      <el-col :offset="9" :span="6" class="item_content">
        <el-input @input="changeInput" :placeholder="hintStr" v-model="form.keyWord"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" @click="submitForm">查询</el-button>
      </el-col>
    </el-row>
  </div>

  <!-- 
      说明:
        关键字查询_表单组件
  -->
</template>
<script>
export default {
  components: {},
  props: {
    hintStr: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      form: {
        keyWord: ""
      }
    };
  },

  methods: {
    submitForm() {
      console.log(this.form);
      if (this.form.keyWord == "") {
        this.$message({
          message: "请先输入查询关键字",
          type: "warning"
        });
        return;
      }
      this.$emit("sendKeyWord", this.form.keyWord);
    },

    changeInput(v) {
      if (v == "") {
        this.$emit("sendKeyWord",this.form.keyWord);
      }
    }
  }
};
</script>

<style lang="scss">
.serchForm {
  .el-form--inline .el-form-item__content {
    display: flex;
  }
  .lable {
    min-width: 50px;
  }
  .item_content {
    display: flex;
    align-items: center;
  }
  input {
    width: 388px;
  }
}
</style>
