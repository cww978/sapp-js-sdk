/**
 * sapp util
 * @author cww
 * @since 2020-01-21
 */
import core from './sapp-core'
export default {
	checkVersion: (params) => {
		core.dispatch('checkVersion', params)
	},
	reload: (params) => {
		core.dispatch('reload', params)
	},
	getAuthorization: (params) => {
		core.dispatch('getAuthorization', params)
	},
	getLocation: (params) => {
		core.dispatch('getLocation', params)
	},
	chooseImage: (params) => {
		core.dispatch('chooseImage', params)
	},
	setStatusBarStyle: (params) => {
		core.dispatch('setStatusBarStyle', params)
	},
	setStatusBarBackground: (params) => {
		core.dispatch('setStatusBarBackground', params)
	},
	showSafearea: (params) => {
		core.dispatch('showSafearea', params)
	},
	hideSafearea: (params) => {
		core.dispatch('hideSafearea', params)
	},
	getStatusbarHeight: (params) => {
		core.dispatch('getStatusbarHeight', params)
	},
	getSafeAreaHeight: (params) => {
		core.dispatch('getSafeAreaHeight', params)
	},
	getSystemInfo: (params) => {
		core.dispatch('getSystemInfo', params)
	}
}