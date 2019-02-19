import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {technologyNav, technologyContent} from '@/datas/technology'

import { Cache } from '@/utils'
const cache = new Cache()

const technology = {
  namespaced: true,
  state: {
    subSliderbar: technologyNav || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain: technologyContent // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default technology
