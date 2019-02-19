import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {booksNav, booksContent} from '@/datas/books'

import { Cache } from '@/utils'
const cache = new Cache()

const books = {
  namespaced: true,
  state: {
    subSliderbar: booksNav || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain: booksContent // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default books
