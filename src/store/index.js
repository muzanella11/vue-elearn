import modules from './modules'
import { Store } from 'vuex'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Store({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
