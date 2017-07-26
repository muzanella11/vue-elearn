import store from 'store'
import { AUTH_LOGIN, AUTH_LOGOUT } from './types'
import { TOKEN_STORAGE, USER_STORAGE } from './state'

export default {
  [AUTH_LOGIN] (state, { token, user }) {
    state.token = token
    store.set(TOKEN_STORAGE, token)

    state.user = user
    store.set(USER_STORAGE, user)
  },

  [AUTH_LOGOUT] (state) {
    state.token = ''
    store.remove(TOKEN_STORAGE)

    state.user = {}
    store.remove(USER_STORAGE)
  }
}
