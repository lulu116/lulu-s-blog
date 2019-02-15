import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { Cache } from '@/utils'
const cache = new Cache()
const app = {
  namespaced: true,
  state: {
    username: 'vue.js',
    sidebar: {
      open: !+cache.get('sidebarStatusFlag') // !+ 先将内容转成boolean再取反 !!类似
    }
  },
  getters,
  actions,
  mutations
}
export default app
