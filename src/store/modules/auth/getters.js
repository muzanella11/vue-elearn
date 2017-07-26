import * as AUTH from './types'

export default {
  [AUTH.GET_AUTH_USER] ({ user }) {
    return user
  },

  [AUTH.GET_USER_TOKEN] ({ token }) {
    return token
  },

  [AUTH.IS_AUTHENTICATED] ({ token }) {
    return token !== ''
  }
}
