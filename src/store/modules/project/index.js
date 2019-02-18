import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {project} from '@/datas/container'
import {projectMain} from '@/datas/containerMain/main'

import { Cache } from '@/utils'
const cache = new Cache()

const blogproject = {
  namespaced: true,
  state: {
    subSliderbar: project || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default blogproject
