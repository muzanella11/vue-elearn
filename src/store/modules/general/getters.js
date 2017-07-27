import * as GLOBAL from './types'

export default {
  [GLOBAL.GET_SERVER_STATE] (state) {
    return state.server_state
  },
  [GLOBAL.GET_LAST_REQUEST] (state) {
    return state.last_request
  }
}
