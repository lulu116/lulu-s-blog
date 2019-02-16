import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import topMenu from '@/datas/menu'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    topMenu, // 左侧菜单列表
    
  },
  modules: {
    app
  },
  getters
})
export default store
