
export default {
  getSliderBar: (state) => {
    return state.subSliderbar
  },
  getActiveKey: (state) => {
    return state.subSliderbar[0].key
  }
}
