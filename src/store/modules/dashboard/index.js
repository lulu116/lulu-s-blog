import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {wrapper, dashboardSkll} from '@/datas/dashboard/wrapper'

import { Cache } from '@/utils'
const cache = new Cache()

const dashboard = {
  namespaced: true,
  state: {
    wrapperList: wrapper || [], // 轮播图列表
    dashboardSkll
  },
  getters,
  actions,
  mutations
}
export default dashboard
