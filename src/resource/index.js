import Vue from 'vue'
import store from '@/store'
import handler from './handler'

Vue.http.options.emulateJSON = true
Vue.http.options.root = process.env.BASE_URL
Vue.http.headers.common['Accept'] = 'application/json'

Vue.http.interceptors.push((request, next) => {
  if (store.state.auth.token) {
    request.headers.set('Authorization', `Bearer ${store.state.auth.token}`)
  }

  // modify headers
  request.headers.set('App-Key', process.env.APP_KEY)
  request.headers.set('Accept', 'application/x.ANTARAN.' + process.env.VERSION + '.json')

  handler(request, next)
})

export default Vue.http
