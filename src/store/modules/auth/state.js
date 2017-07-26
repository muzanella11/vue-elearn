import store from 'store'

export const TOKEN_STORAGE = 'TOKEN_STORAGE'
export const USER_STORAGE = 'USER_STORAGE'

export default {
  token: store.get(TOKEN_STORAGE) || '',
  user: store.get(USER_STORAGE) || {}
}
