import config from './core/sapp.config'
import core from './core/sapp-core'
import util from './core/sapp-util'

if (typeof window.sapp == 'undefined') {
  window.sapp = {
    ...config,
    core,
    util
  }
}

console.info('sapp-js-sdk: ', config.version)

export default {
  ...config,
  core,
  util
}