import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {aboutMeNav, aboutMeContent} from '@/datas/aboutMe'

import { Cache } from '@/utils'
const cache = new Cache()

const aboutMe = {
  namespaced: true,
  state: {
    subSliderbar: aboutMeNav || [], // 项目模块导航
    navpath: '1', // 项目模块导航key
    projectMain: aboutMeContent // 项目主要内容
  },
  getters,
  actions,
  mutations
}
export default aboutMe
