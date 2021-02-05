<template>
  <div class="selectCar-content" :class="contentMargin">
    <label style="padding-right:0" class="el-form-item__label" v-if="showLabel">选择车辆：</label>
    <el-input
      ref="select_element"
      :value="carName"
      @focus="selectCar"
      :placeholder="chooseInt[chooseType]"
      readonly
      :style="setInputWidth"
    ></el-input>
    <el-dialog
      title="选择车辆"
      :visible.sync="dialogVisible"
      width="50%"
      v-if="dialogVisible"
      :close-on-click-modal="false"
      top="6vh"
      append-to-body
    >
      <carTable @getCurrentCar="getCurrentCar" :chooseList="chooseList" :chooseType="chooseType" />
    </el-dialog>
  </div>
</template>
<script>
import carTable from "./carTable.vue";
export default {
  components: {
    carTable: carTable
  },
  props: {
    /*选择的类型   1 多选  2单选*/
    chooseType: {
      type: Number,
      default: 1
    },
    /*已选中的车辆*/
    chooseCar: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    /*input框的长度*/
    width: {
      type: String,
      default: "20vh"
    },
    /* 显示label--车组车辆 */
    showLabel: {
      type: Boolean,
      default: true
    },
    /* 整体的marginright20px */
    showContentMargin: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      carName: "",
      dialogVisible: false,
      chooseList: [], //选择的车辆
      chooseInt: ["", "可选择多个车辆", "请选择单个车辆"]
    };
  },
  computed: {
    contentMargin: function() {
      return {
        marginRight20: this.showContentMargin
      };
    },
    setInputWidth() {
      return `width:${this.width}`;
    }
  },
  mounted() {
    // 初始化值
    if (this.chooseCar.length > 0) {
      this.chooseList = [...this.chooseCar];
      this.getCarName();
    }
  },
  watch: {
    chooseCar(curVal, oldVal) {
      if (curVal.length > 0) {
        this.chooseList = curVal;
        this.getCarName();
      }
    }
  },
  methods: {
    /** 去选择车辆 */
    selectCar() {
      this.dialogVisible = true;
    },
    /** 获取选择的车辆值 */
    getCurrentCar(type, list) {
      if (type === 1) {
        this.chooseList = [...list];
        this.getCarName();
      }
      this.dialogVisible = false;
      this.sendChooseCar();
    },
    /** 显示车辆名称到输入框中 */
    getCarName() {
      this.sendChooseCar();
      this.carName = "";
      if (this.chooseList.length == 0) {
        return;
      }

      for (const v of this.chooseList) {
        if (this.chooseList.length == 1) {
          this.carName = this.carName + v.name;
        } else {
          this.carName = this.carName + v.name + ",";
        }
      }

      this.$refs.select_element.blur();
    },
    /** 车辆 */
    sendChooseCar() {
      this.$emit("sendChooseCar", this.chooseList);
    },
    /* 清除选择的车辆  父组件清除数据*/
    clear() {
      this.chooseList = [];
      this.carName = "";
      this.$emit("sendChooseCar", []);
    },
  }
};
</script>
<style scoped>
.selectCar-content {
  display: flex;
  vertical-align: top;
  justify-content: center;
}
.el-form-item__label {
  white-space: nowrap;
  width: 96px;
}
.el-input {
  /* height: 34px; */
  width: 20vh;
}
.marginRight20 {
  margin-right: 20px;
}
.el-dialog__body {
  padding-top: 0 !important;
}
</style>
