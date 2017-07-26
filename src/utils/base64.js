/* For Base64 */

export default function (type, words) {
  let result = ''
  if (words) {
    type = type.toLowerCase()
    if (type === 'encode' && typeof type === 'string') {
      result = window.btoa(words)
    } else if (type === 'decode' && typeof type === 'string') {
      result = window.atob(words)
    } else {
      console.error('Sorry not found Type : ' + type + ' on base64.js or type must be string')
    }
  } else {
    console.error('Sorry not found words. Words must be string')
  }

  return result
}
