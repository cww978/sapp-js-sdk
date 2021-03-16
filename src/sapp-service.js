/**
 * sapp 服务注册表
 * @author cww
 * @since 2020-01-21
 */
(function($){
	$.core.registerService('getAuthorization', () => {
		return new Promise((resolve, reject) => {
			try {
			  const data = TokenService.getToken()
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail('token获取失败'))
			}
		})
	})
	$.core.registerService('getLocation', () => {
		return new Promise(async (resolve, reject) => {
			try {
			  const data = await LocationService.getLocation()
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail(e))
			}
		})
	})
	$.core.registerService('chooseImage', ({ params }) => {
		return new Promise(async (resolve, reject) => {
			try {
			  const data = await FileService.chooseImage(params)
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail(e))
			}
		})
	})
	$.core.registerService('reload', () => {
		return new Promise(async (resolve, reject) => {
			try {
				ViewService.reload()
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('checkVersion', () => {
		return new Promise(async (resolve, reject) => {
			try {
				VersionService.checkVersion()
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('setStatusBarStyle', ({ params }) => {
		return new Promise(async (resolve, reject) => {
			try {
				ViewService.setStatusBarStyle(params)
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('setStatusBarBackground', ({ params }) => {
		return new Promise(async (resolve, reject) => {
			try {
				ViewService.setStatusBarBackground(params)
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('showSafearea', ({ params }) => {
		return new Promise(async (resolve, reject) => {
			try {
				ViewService.showSafearea(params)
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('hideSafearea', () => {
		return new Promise(async (resolve, reject) => {
			try {
				ViewService.hideSafearea()
				resolve(R.ok())
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('getStatusbarHeight', () => {
		return new Promise(async (resolve, reject) => {
			try {
				const data = await ViewService.getStatusbarHeight()
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('getSafeAreaHeight', () => {
		return new Promise(async (resolve, reject) => {
			try {
				const data = await ViewService.getSafeAreaHeight()
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail())
			}
		})
	})
	$.core.registerService('getSystemInfo', () => {
		return new Promise(async (resolve, reject) => {
			try {
				const data = await SystemService.getSystemInfo()
				resolve(R.ok(data))
			} catch (e) {
				reject(R.fail())
			}
		})
	})

	/**
	 * 封装返回结果
	 */
	const R = {
		ok: (data) => {
			return {
				code: 0,
				data: data || '',
				msg: '执行成功'
			}
		},
		fail: (msg) => {
			return {
				code: -1,
				data: null,
				msg: msg || '执行失败'
			}
		}
	}
})(sapp)