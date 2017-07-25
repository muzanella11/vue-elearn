export const Dashboard = (resolve) => {
  require.ensure(['./Dashboard'], () => {
    resolve(require('./Dashboard'))
  })
}
