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
      breadcrumb: [{
        to: {name: 'dashboard'},
        label: 'Dashboard'
      }]
    }
  }
]
