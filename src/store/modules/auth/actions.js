import auth from '@/api/modules/auth'
import promise from '@/utils/promise-utils'
import { AUTH_AUTHENTICATE, AUTH_DEAUTHENTICATE, AUTH_LOGIN, AUTH_LOGOUT, AUTH_FORGOT_PASSWORD, AUTH_CONNECTION } from './types'

export default {
  [AUTH_CONNECTION] (context, payload) {
    console.info('connection : ', context)
    console.info('connection : ', payload)
    return new Promise((resolve, reject) => {
      auth.testConnection(payload).then((response) => {
        console.info('response : ', response.body.data)
        resolve(response)
      }, (error) => {
        console.info('error : ', error)
        reject(error)
      })
    })
  },

  [AUTH_AUTHENTICATE] ({ commit }, data) {
    // console.info(context)
    return new Promise((resolve, reject) => {
      let config = {
        endpoint: 'login',
        method: 'post',
        body: data
      }
      // console.info('config : ', config)
      auth.signin(config).then((response) => {
        const token = response.data.data.token

        auth.profile(token).then((response) => {
          const user = response.data.data
          const data = {user, token}

          commit(AUTH_LOGIN, data)

          resolve(data)
        }, (error) => {
          reject(error)
        })
      }, (error) => {
        reject(error)
      })
    })
  },

  [AUTH_FORGOT_PASSWORD] ({commit}, payload) {
    return promise.wrap(auth.forgotPassword(payload))
  },

  [AUTH_DEAUTHENTICATE] ({ commit }) {
    return promise.wrap(auth.logout(), (data) => {
      commit(AUTH_LOGOUT)
    }, (reason) => {
      commit(AUTH_LOGOUT)
    })
  }
}
