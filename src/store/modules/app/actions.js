export default {
  OpenSliderbar ({commit, dispatch, getters}) {
    commit('TOGGLE_SLIDERBAR')
  },
  handleSelect ({commit, dispatch, getters}, {payload}) {
    commit('ACTIVE_KEY', payload.key)
  }
}
