import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { Cache } from '@/utils'
import topMenu from '@/datas/menu'
const cache = new Cache()
const app = {
  namespaced: true,
  state: {
    username: 'vue.js',
    sidebar: {
      open: !+cache.get('sidebarStatusFlag') // !+ 先将内容转成boolean再取反 !!类似
    },
    topMenu,
    activeKey: String(cache.get('sidebarActiveKey')) || topMenu[0].key || '1'
  },
  getters,
  actions,
  mutations
}
export default app
