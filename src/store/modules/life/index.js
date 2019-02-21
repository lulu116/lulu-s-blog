import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {lifeNav, lifeContent} from '@/datas/life'
import { Cache } from '@/utils'
const cache = new Cache()

const life = {
  namespaced: true,
  state: {
    subSliderbar: lifeNav || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain: lifeContent // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default life
