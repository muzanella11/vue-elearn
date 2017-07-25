export const Input = (resolve) => {
  require.ensure(['./Input'], () => {
    resolve(require('./Input'))
  })
}
