/**
 * sapp service
 * @author cww
 * @since 2020-01-21
 */
import { R } from './common'

function getAuthorization() {
	return new Promise((resolve, reject) => {
		try {
			const data = TokenService.getToken()
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail('token获取失败'))
		}
	})
}

function getLocation() {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await LocationService.getLocation()
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail(e))
		}
	})
}

function chooseImage({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await FileService.chooseImage(params)
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail(e))
		}
	})
}

function logOut() {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.reload()
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function refresh() {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.refresh()
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function checkVersion() {
	return new Promise(async (resolve, reject) => {
		try {
			VersionService.checkVersion()
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function setStatusBarStyle({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.setStatusBarStyle(params)
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function setStatusBarBackground({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.setStatusBarBackground(params)
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function showSafearea({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.showSafearea(params)
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function hideSafearea() {
	return new Promise(async (resolve, reject) => {
		try {
			ViewService.hideSafearea()
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function getSafeAreaHeight() {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await ViewService.getSafeAreaHeight()
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail())
		}
	})
}

function getStatusbarHeight() {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await ViewService.getStatusbarHeight()
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail())
		}
	})
}

function getSystemInfo() {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await SystemService.getSystemInfo()
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail())
		}
	})
}

function cacheSetItem({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			await CacheService.setItem(params)
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

function cacheGetItem({ params }) {
	return new Promise(async (resolve, reject) => {
		try {
			const data = await CacheService.getItem(params)
			resolve(R.ok(data))
		} catch (e) {
			reject(R.fail())
		}
	})
}

function cacheClear() {
	return new Promise(async (resolve, reject) => {
		try {
			await CacheService.clear()
			resolve(R.ok())
		} catch (e) {
			reject(R.fail())
		}
	})
}

export default {
	logOut,
	reload: logOut,
	refresh,
	getAuthorization,
	getLocation,
	chooseImage,
	checkVersion,
	setStatusBarStyle,
	setStatusBarBackground,
	showSafearea,
	hideSafearea,
	getStatusbarHeight,
	getSafeAreaHeight,
	getSystemInfo,
	cacheSetItem,
	cacheGetItem,
	cacheClear
}
