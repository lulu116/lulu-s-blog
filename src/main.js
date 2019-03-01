import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NProgress from 'nprogress'
// 全局引入element-ui，引入样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element ui样式
import '@/styles/index.scss' // 自己写的样式
import '@/styles/js/font_abcd.js' // iconfont字体
import 'nprogress/nprogress.css' // 进度条样式，必须引入
import SvgIcon from '@/components/SvgIcon'
// 使用element-ui
Vue.use(ElementUI, {
  size: 'medium' // 改变组件的默认尺寸medium / small / mini
})
// 引入mock数据
require('./mock/mock')
// 取消 Vue 所有的日志与警告。
// Vue.config.silent = true
// 务必在加载 Vue 之后，立即同步设置以下内容
// Vue.config.devtools = true
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 为啥要弄两个入口，渲染时明显APP.vue才是顶层对象，vue规定
/* eslint-disable no-new */
/* 新建一个顶层的vue实例 */
/* router.beforeEach((to, from, next) => {
  next('/dashboard')
}) */
Vue.component('svg-icon', SvgIcon) // 全局注册组件

// 简单配置
NProgress.inc(0.1) // 产生一个随机增量
NProgress.configure({
  easing: 'ease',
  speed: 1000, // ms default:200
  showSpinner: 200 // 是否显示环形进度动画，默认true
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
new Vue({
  el: '#app', // 提供一个在页  面上已存在的 DOM 元素作为 Vue 实例的挂载目标。
  router, // 注入路由 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
  store, // 状态管理器
  components: { App }, // Vue 实例可用组件的哈希表
  template: '<App/>' // 一个字符串模板作为 Vue 实例的标识使用。模板将会 替换 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发 slot
})
