
import {
  NAV_PATH
} from './mutation-types'

import {Cache} from '@/utils'
const cache = new Cache()
export default {
  [NAV_PATH]: (state, payload) => {
    state.navpath = payload
    // cache.put('subnavpath', payload)
    // return {
    //   ...state,
    //   navpath: payload.path
    // }
  }
}
