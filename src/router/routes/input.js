import {
  Input
} from '@/pages/input'

export default [
  {
    path: '/input',
    name: 'input',
    component: Input,
    meta: {
      layout: true,
      breadcrumb () {
        return [{
          to: {name: 'input'},
          label: 'Input'
        }]
      }
    }
  }
]
