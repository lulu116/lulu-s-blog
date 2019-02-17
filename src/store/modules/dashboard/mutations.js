
import {
  NAV_PATH
} from './mutation-types'

import {Cache} from '@/utils'
const cache = new Cache()
export default {
  [NAV_PATH]: (state, payload) => {
    return {
      ...state,
      navpath: payload.path
    }
  }
}
