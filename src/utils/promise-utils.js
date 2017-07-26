export default {
  // todo handle nested promises (?)
  // this is an antipattern. use carefully
  wrap (promise, successCallback, errorCallback) {
    if (!promise.then()) { // check if object is a promise
      return new TypeError('first parameter must be a promise')
    }

    return new Promise((resolve, reject) => {
      promise.then(({data}) => {
        if (successCallback && this.functionValid(successCallback)) {
          successCallback(data)
        }
        resolve(data)
      }, (reason) => {
        if (errorCallback && this.functionValid(errorCallback)) {
          errorCallback(reason)
        }
        reject(reason)
      })
    })
  },

  functionValid (fn) {
    if (typeof fn !== 'function') {
      return new TypeError(fn.toString() + ' must be a function')
    } else {
      return true
    }
  }
}
