import {
  Dashboard
} from '@/pages/dashboard'

export default [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      layout: true,
      breadcrumb () {
        return [{
          to: {name: 'dashboard'},
          label: 'Dashboard'
        }]
      }
    }
  }
]
