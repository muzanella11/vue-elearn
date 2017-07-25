export const List = (resolve) => {
  require.ensure(['./List'], () => {
    resolve(require('./List'))
  })
}
