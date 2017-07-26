import * as GLOBAL from './types'
import api from '@/api'

export default {
  [GLOBAL.CHECK_SERVER_STATE] ({ commit }) {
    return new Promise((resolve, reject) => {
      api.test().then((response) => {
        commit(GLOBAL.SET_SERVER_STATE, 'up')

        resolve(response)
      }, (errorResponse) => {
        if (errorResponse.status === 503) {
          commit(GLOBAL.SET_SERVER_STATE, 'down')
        }

        reject(errorResponse)
      })
    })
  }
}
