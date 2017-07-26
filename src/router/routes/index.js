import auth from './auth'
import dashboard from './dashboard'
import list from './list'
import input from './input'
import vuetifyex from './vuetifyex'

const Hello = (resolve) => {
  require.ensure(['@/components/Hello'], () => {
    resolve(require('@/components/Hello'))
  })
}

const PageNotFound = (resolve) => {
  require.ensure(['@/pages/error/404'], () => {
    resolve(require('@/pages/error/404'))
  })
}

const hello = {
  path: '/hello',
  name: 'hello',
  component: Hello,
  meta: {
    breadcrumb: [{
      to: {name: 'hello'},
      label: 'Hello'
    }]
  }
}

export default [
  ...auth,
  ...dashboard,
  ...list,
  ...input,
  hello,
  ...vuetifyex,
  {
    name: 'pageNotFound',
    path: '*',
    component: PageNotFound,
    meta: {
      allowAnonymous: true
    }
  }
]
