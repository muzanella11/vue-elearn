export const Login = (resolve) => {
  require.ensure(['./Login'], () => {
    resolve(require('./Login'))
  })
}

export const Logout = (resolve) => {
  require.ensure(['./Logout'], () => {
    resolve(require('./Logout'))
  })
}
