<template>
  <div :id="id" class="chart" style="height:200px;"></div>
</template>

<script>
export default {
  name: "hello",
  props: {
    option: {
      type: Object
    },
    id: {
      type: String
    }
  },
  watch:{
    option:{
      handler(newV,oldV){
        this.drawLine()
      },
      deep:true
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    if (this.option) {
      this.drawLine();
      this.init();
    }
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id));
      // 绘制图表
      this.myChart.setOption(this.option);
    },
    //监听自适应
    init() {
      setTimeout(() => {
        window.addEventListener("resize", () => {
          this.myChart.resize();
        });
      }, 20);
    },
    destroyed() {
      window.removeEventListener("resize", this.init, 20);
    }

  }
};
</script>

<style scoped>
.chart {
  width: 100%;
}
</style>
