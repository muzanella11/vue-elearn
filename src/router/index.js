import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })

const router = new Router({
  routes
})

export default router
