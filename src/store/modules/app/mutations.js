
import {
  TOGGLE_SLIDERBAR
} from './mutation-types'

import {Cache} from '@/utils'
const cache = new Cache()
export default {
  [TOGGLE_SLIDERBAR]: (state, payload) => {
    if (state.sidebar.open) {
      cache.put('sidebarStatusFlag', 1)
    } else {
      cache.put('sidebarStatusFlag', 0)
    }
    state.sidebar.open = !state.sidebar.open
  }
}
