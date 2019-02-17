import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import dashboard from './modules/dashboard'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
   
  },
  modules: {
    app,
    dashboard
  },
  getters
})
export default store
