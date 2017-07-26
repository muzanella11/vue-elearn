import * as GLOBAL from './types'

export default {
  [GLOBAL.SET_SERVER_STATE] (state, stateServer) {
    state.server_state = stateServer
  },
  [GLOBAL.SET_LAST_REQUEST] (state, timeInMilis) {
    state.last_request = timeInMilis
  }
}
