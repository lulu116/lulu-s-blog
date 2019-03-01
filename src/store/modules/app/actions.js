import {test} from '@/services/app'
export default {
  async OpenSliderbar ({commit, dispatch, getters}) {
    const res = await test()
    console.log(res)
    commit('TOGGLE_SLIDERBAR')
  },
  handleSelect ({commit, dispatch, getters}, {payload}) {
    commit('ACTIVE_KEY', payload.key)
  }
}
