import { Login, Logout } from '@/pages/auth'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      allowAnonymous: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
]
