import SHA256 from 'crypto-js/sha256'
import MD5 from 'crypto-js/md5'
import CryptoJs from 'crypto-js'

window.CryptoJs = CryptoJs

export default function (type, string, decrypt = false) {
  if (string && type) {
    if (type === 'md5') {
      if (decrypt) {
        return false
      } else {
        return window.CryptoJs.MD5(string).toString()
      }
    } else if (type === 'aes') {
      // aes encryption
      if (decrypt) {
        let bytes = window.CryptoJs.AES.decrypt(string.toString(), 'aes').toString()
        let result = bytes.toString(window.CryptoJs.enc.Utf8)
        return result
      } else {
        return window.CryptoJs.AES.encrypt(string, 'aes').toString()
      }
    } else if (type === 'des') {
      // des encryption
      if (decrypt) {
        console.info('des encrypt')
        return window.CryptoJs.DES.decrypt(string.toString(), 'des').toString()
      } else {
        console.info('des decrypt')
        return window.CryptoJs.DES.encrypt(string.toString(), 'des').toString()
      }
    } else {
      console.error('Sorry not found type')
    }
  } else {
    console.error('Sorry not found Type or String')
  }
}
