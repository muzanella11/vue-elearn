export const VueGrid = (resolve) => {
  require.ensure(['./grid'], () => {
    resolve(require('./grid'))
  })
}
