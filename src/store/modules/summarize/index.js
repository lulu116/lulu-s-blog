import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {summarizeNav, summarizeContent} from '@/datas/summarize'

import { Cache } from '@/utils'
const cache = new Cache()

const summarize = {
  namespaced: true,
  state: {
    subSliderbar: summarizeNav || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain: summarizeContent // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default summarize
