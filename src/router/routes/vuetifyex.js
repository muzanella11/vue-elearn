import {
  VueGrid
} from '@/pages/vuetifyex'

export default [
  {
    path: '/vuetify/grid',
    name: 'vuetify.grid',
    component: VueGrid,
    meta: {
      breadcrumb: [{
        to: {name: 'vuetify.grid'},
        label: 'Vuetify Grid'
      }]
    }
  }
]
