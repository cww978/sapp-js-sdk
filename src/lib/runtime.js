import config from './core/sapp.config'
import core from './core/sapp-core'
import service from './core/sapp-service'
function registerAll() {
  for(let i in service) {
    core.registerService(i, service[i])
  }
}
registerAll()
console.info('sapp-js-runtime: ', config.version)
export default {
  ...config,
  core,
  service
}
