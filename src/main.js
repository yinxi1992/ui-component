import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import App from './App.vue'
import './assets/css/blackTheme.scss'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
