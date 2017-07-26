export default {
  reset (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (obj[prop] instanceof Array) {
          obj[prop] = []
        } else if (obj[prop] instanceof Object) {
          this.reset(obj[prop])
        } else {
          let defaultVal
          if (typeof obj[prop] === 'string') {
            defaultVal = ''
          } else if (typeof obj[prop] === 'number') {
            defaultVal = 0
          } else if (typeof obj[prop] === 'boolean') {
            defaultVal = false
          } else {
            defaultVal = ''
          }

          obj[prop] = defaultVal
        }
      }
    }
  },

  // http://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
  // warning !! simple object only
  toQueryParam (obj) {
    if (obj) {
      return '?' + Object.keys(obj).reduce(function (a, k) { a.push(k + '=' + encodeURIComponent(obj[k])); return a }, []).join('&')
    } else {
      return ''
    }
  }
}
