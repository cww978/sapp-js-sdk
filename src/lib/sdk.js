import config from './core/sapp.config'
import core from './core/sapp-core'
import util from './core/sapp-util'
console.info('sapp-js-sdk: ', config.version)
export default {
  ...config,
  core,
  util
}