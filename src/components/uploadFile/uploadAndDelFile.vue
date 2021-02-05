<template>
  <el-upload
    :disabled="disabled"
    ref="upload"
    class="uploadAndDelFile"
    :multiple="false"
    :auto-upload="true"
    :on-error="uploadFalse"
    :on-success="uploadSuccess"
    :before-upload="beforeUpload"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :action="uploadUrl()"
    :headers="getHeader()"
    :limit="1"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button
      type="primary"
      class="btn"
    >{{name}}</el-button>
  </el-upload>
</template>

<script>
// import config from "@/api/static/config";
// import { removePack } from "@/api/api.js";
export default {
  props: {
    /**导入的请求路径 */
    url: {
      type: String,
      default: ""
    },
    /**按钮名称 */
    name: {
      type: String,
      default: "导入"
    },
    /**按钮可用 */
    disabled: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      formData: "",
      fileList: []
    };
  },

  methods: {
    /* 接口请求头 */
    getHeader() {
      return {
        Authorization: sessionStorage.getItem("token"),
        token: sessionStorage.getItem("token")
      };
    },
    /* 上传接口 */
    uploadUrl() {
      // return config.apiBaseUrl + this.url;
      return "http://39.104.20.99:11888/gps" + this.url;
    },
    beforeUpload(file) {
      // let checkMsg = this.check_file(file);
      let checkMsg = "";
      if (checkMsg != "") {
        this.$message.error(checkMsg);
        return;
      }
    },
    /**文件格式验证 */
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

    /* 添加文件成功时触发函数 上传到后台 */
    uploadSuccess(response, file, fileList) {
      if (response.success) {
        if (response.code == 200) {
          this.$message.success("文件导入成功");
          this.$emit("uploadSuccess", response.data);
        } else {
          this.$message.error(response.data);
        }
      } else {
        this.$message.error(response.data);
      }
    },
    /**文件上传失败！ */
    uploadFalse(response, file, fileList) {
      this.$message.error("文件上传失败！");
      this.$emit("uploadSuccess");
    },
    /**只能选一个 */
    handleExceed(files, fileList) {
      this.$message.warning(`请先删除文件再重新选择`);
    },

    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    /**移除文件 */
    handleRemove(file, fileList) {
      removePack({ packUrl: file.response.data.url }).then(res => {});
    },

    /**form界面点击取消 */
    handleCancle(data) {
      removePack({ packUrl: data }).then(res => {});
    }
  }
};
</script>

<style lang='scss'>
.uploadAndDelFile {
  display: inline;
  .el-upload {
    display: inline !important;
    border: none !important;
  }
  .el-upload-list {
    // display: none;
  }
}
</style>
