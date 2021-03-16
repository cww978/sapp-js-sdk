/**
 * sapp core
 * @author cww
 * @since 2020-01-21
 */
import { customEvent } from './common'

function type(obj) {
	return obj == null ? String(obj) : "object"
}

function isWindow(obj) {
	return obj != null && obj === obj.window
}

function isObject(obj) {
	return type(obj) === "object"
}
function isPlainObject(obj) {
	return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype
}
function trigger(element, eventType, eventData) {
	element.dispatchEvent(new customEvent(eventType, {
		detail: eventData,
		bubbles: true,
		cancelable: true
	}))
}
function registerService(name, callBack) {
	window.addEventListener(name, async e => {
		const success = e.detail ? e.detail.success : ''
		const fail = e.detail ? e.detail.fail : ''
		const params = e.detail ? e.detail : {}
		const topView = plus.webview.getTopWebview()
		try {
			const res = await callBack(params)
			success && fire(topView, success, res)
		} catch (error) {
			fail && fire(topView, fail, error)
		}
	})
}
function dispatch(name, params = {}) {
	const client = {}
	const { success, fail } = params
	client.success = function(e) {
		window.removeEventListener(name + '-success', client.success)
		if (typeof success === 'function') {
			success(e.detail)
		}
	}
	client.fail = function(e) {
		window.removeEventListener(name + '-fail', client.fail)
		if (typeof fail === 'function') {
			fail(e.detail)
		}
	}
	window.addEventListener(name + '-success', client.success)
	window.addEventListener(name + '-fail', client.fail)
	const indexView = plus.webview.getLaunchWebview()
	fire(indexView, name, { success: name + '-success', fail: name + '-fail', params })
}

function receive(eventType, data) {
	if (eventType) {
		try {
			if (data) {
				data = JSON.parse(data);
			}
		} catch (e) {
			console.error(e)
		}
		trigger(document, eventType, data)
	}
}
function fire(webview, eventType, data) {
	if (webview) {
		if (data !== '') {
			data = data || {}
			if (isPlainObject(data)) {
				data = JSON.stringify(data || {}).replace(/\'/g, "\\u0027").replace(/\\/g, "\\u005c");
			}
		}
		webview.evalJS("typeof sapp!=='undefined'&&sapp.core.receive('" + eventType + "','" + data + "')")
	}
}

export default {
	type,
	isWindow,
	isObject,
	isPlainObject,
	trigger,
	registerService,
	dispatch,
	receive,
	fire
}
