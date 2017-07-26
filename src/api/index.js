import auth from './modules/auth'
import client from '@/resource'

export default {
  test () {
    return client.get(process.env.BASE_URL)
  },
  auth
}
