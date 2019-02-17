import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import {project} from '@/datas/container'
const dashboard = {
  namespaced: true,
  state: {
    subSliderbar: project || [],
    navpath: ''
  },
  getters,
  actions,
  mutations
}
export default dashboard
