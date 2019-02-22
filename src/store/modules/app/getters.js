
export default {
  getUserName: (state) => {
    return state.username || '暂无'
  },
  getSliderbar: (state) => {
    return state.sidebar.open
  },
  getTopMenu: (state) => {
    return state.topMenu || []
  },
  getActiveKey: (state) => {
    return state.activeKey
  }
}
