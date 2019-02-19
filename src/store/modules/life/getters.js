
export default {
  getSliderBar: (state) => {
    return state.subSliderbar
  },
  getProjectMain: (state) => {
    return state.projectMain
  },
  getActiveKey: (state) => {
    return state.subSliderbar[0].key
  }
}
