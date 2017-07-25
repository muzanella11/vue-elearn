import {
  List
} from '@/pages/list'

export default [
  {
    path: '/list',
    name: 'list',
    component: List,
    meta: {
      layout: true,
      breadcrumb () {
        return [{
          to: {name: 'list'},
          label: 'List'
        }]
      }
    }
  }
]
