import client from '@/resource'

export default {
  api (config) {
    // You must have method and endpoint or url
    if (config.method && config.endpoint) {
      let request = ''

      if (config.method === 'get' || config.method === 'head' || config.method === 'delete' || config.method === 'jsonp' || config.method === 'post' || config.method === 'put' || config.method === 'patch') {
        config.method === 'post' || config.method === 'put' || config.method === 'patch' // if method post put or patch
        ? config.body // Must have body or data
          ? config.options && typeof config.options === 'object'
            ? request = client[config.method](config.endpoint, config.body, config.options) // Run with options
            : request = client[config.method](config.endpoint, config.body) // Run without options
          : console.error('Sorry, not found body or data in request js')
        : config.options
          ? request = client[config.method](config.endpoint, config.options) // Run with options
          : request = client[config.method](config.endpoint) // Run without options
      } else {
        console.error('Sorry, not found method')
        console.error('Check https://github.com/pagekit/vue-resource/blob/develop/docs/http.md')
        console.error(':D')
      }

      return request
    } else {
      console.warn('Sorry, not found method or endpoint')
    }
  }
}
