<template>
  <el-upload
    ref="upload"
    class="upload"
    :multiple="false"
    :auto-upload="true"
    :on-error="uploadFalse"
    :on-success="uploadSuccess"
    :before-upload="beforeUpload"
    :action="uploadUrl()"
    :headers="getHeader()"
  >
    <el-button type="primary" class="btn">{{name}}</el-button>
  </el-upload>
</template>

<script>
// import config from "@/api/static/config";

export default {
  props: {
    /**导入的请求路径 */
    url: {
      type: String,
      default: ""
    },
    /**按钮名称 */
    name :{
      type: String,
      default: "导入"
    }
  },

  data() {
    return {
      formData: ""
    };
  },

  methods: {
    getHeader() {
      return {
        Authorization: sessionStorage.getItem("token"),
        token: sessionStorage.getItem("token")
      };
    },

    beforeUpload(file) {
      // let checkMsg = this.check_file(file);
      let checkMsg = "";
      if (checkMsg != "") {
        this.$message.error(checkMsg);
        return;
      }
    },

    check_file(file) {
      let msg = "";
      let extension = file.name.split(".")[1] === "xls";
      let extension2 = file.name.split(".")[1] === "xlsx";
      let isLt2M = file.size / 1024 / 1024 < 10;
      if (!extension && !extension2) {
        msg = "只能上传xls或xlsx文件";
      }
      if (!isLt2M) {
        msg = "上传模板大小不能超过 10MB!";
      }
      return msg;
    },

    /* 上传接口 */
    uploadUrl() {
      // return config.apiBaseUrl + this.url;
      return "http://39.104.20.99:11888/gps" + this.url;
    },

    /* 添加文件成功时触发函数 上传到后台 */
    uploadSuccess(response, file, fileList) {
      if (response.success) {
        if (response.code == 200) {
          this.$message.success("文件导入成功");
          this.$emit("uploadSuccess");
        } else {
          this.$message.error(response.data);
        }
      } else {
        this.$message.error(response.data);
      }
    },

    uploadFalse(response, file, fileList) {
      this.$message.error("文件上传失败！");
    }
  }
};
</script>

<style lang='scss'>
.upload {
  display: inline;
  .el-upload {
    display: inline !important;
    border: none !important;
  }
  .el-upload-list {
    display: none;
  }
}
</style>
