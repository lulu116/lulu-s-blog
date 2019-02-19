import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import blogproject from './modules/project'
import dashboard from './modules/dashboard'
import technology from './modules/technology'
import books from './modules/books'
import life from './modules/life'
import summarize from './modules/summarize'
import aboutMe from './modules/aboutMe'
import getters from './getters'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {

  },
  modules: {
    app,
    blogproject,
    dashboard,
    technology,
    books,
    life,
    summarize,
    aboutMe
  },
  getters
})
export default store
