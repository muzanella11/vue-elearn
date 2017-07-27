import store from '@/store'
import * as GLOBAL from '@/store/modules/general/types'
import route from '@/router'

export default function (request, next) {
  next((response) => {
    if (Date.now() - store.getters[GLOBAL.GET_LAST_REQUEST] > (60 * 60 * 1000)) { // an hour idle limit
      route.push({name: 'logout'})
      route.app.$toast({
        message: 'You have been idling for too long!',
        type: 'error'
      })
    }

    store.commit(GLOBAL.SET_LAST_REQUEST, Date.now())

    if (response.status === 401 && response.data.code !== 4) {
      route.push({name: 'logout'})
    }

    if (response.status === 422) {
      // todo handle 422
      // store.commit('setErrors', response.data.errors)
    }

    if (response.status === 503) {
      store.commit(GLOBAL.SET_SERVER_STATE, 'down')
    }

    if (response.status === 500) {
      route.app.$toast({
        message: 'Sorry error has occurred !',
        type: 'error'
      })
    }
  })
}
