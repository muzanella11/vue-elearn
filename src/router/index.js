import Vue from 'vue'
import store from '@/store'
import routes from './routes'
import Router from 'vue-router'

const router = new Router({
  routes
})

// Scroll to top after route changed
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.mainContent')

    if (mainContent) {
      mainContent.scrollTop = 0
    }

    next()
  })
})

// Protect Route
router.beforeEach((to, from, next) => {
  // If allow anonymous
  if (to.meta.allowAnonymous) {
    return next()
  }

  // If token is present
  if (store.state.auth.token) {
    return next()
  }

  // Otherwise...
  return next({name: 'login'})
})

export default router
