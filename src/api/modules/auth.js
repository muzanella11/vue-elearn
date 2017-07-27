import client from '@/resource'
import request from '@/api/request'

export default {
  testConnection (data) {
    return client.post('auth/login', data)
  },

  signin (config) {
    return request.api(config)
  },

  login (credential) {
    return client.post('login', credential)
  },

  forgotPassword (email) {
    return client.post('forget-password', email)
  },

  profile (token) {
    return client.get('me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  },

  logout () {
    return client.get('logout')
  }
}
