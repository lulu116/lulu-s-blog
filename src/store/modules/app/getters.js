
export default {
  getUserName: (state) => {
    return state.username || '暂无'
  },
  getSliderbar: (state) => {
    return state.sidebar.open
  }
}
