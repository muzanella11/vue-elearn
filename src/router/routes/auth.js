import { Login, Logout, ForgotPassword } from '@/pages/auth'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      noLayout: true,
      allowAnonymous: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/forgot-password',
    name: 'forgot.password',
    component: ForgotPassword,
    meta: {
      noLayout: true,
      allowAnonymous: true
    }
  }
]
