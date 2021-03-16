/**
 * sapp 核心代码
 * @author cww
 * @since 2020-01-21
 */
(function($){
	const class2type = {}
  $.core = {
		type: (obj) => {
			return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || "object"
		},
		isWindow: (obj) => {
			return obj != null && obj === obj.window
		},
		isObject: (obj) => {
			return $.core.type(obj) === "object"
		},
		isPlainObject: (obj) => {
			return $.core.isObject(obj) && !$.core.isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype
		},
    trigger: (element, eventType, eventData) => {
      element.dispatchEvent(new CustomEvent(eventType, {
        detail: eventData,
        bubbles: true,
        cancelable: true
      }))
    },
		registerService: (name, callBack) => {
			window.addEventListener(name, async e => {
				const success = e.detail ? e.detail.success : ''
				const fail = e.detail ? e.detail.fail : ''
				const params = e.detail ? e.detail : {}
				const topView = plus.webview.getTopWebview()
				try {
					const res = await callBack(params)
				  success && $.core.fire(topView, success, res)
				} catch (error) {
				  fail && $.core.fire(topView, fail, error)
				}
			})
		},
		dispatch: (name, params = {}) => {
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
			$.core.fire(indexView, name, { success: name + '-success', fail: name + '-fail', params })
		},
    receive: (eventType, data) => {
      if (eventType) {
        try {
          if (data) {
            data = JSON.parse(data);
          }
        } catch (e) {
          console.error(e)
        }
        $.core.trigger(document, eventType, data)
      }
    },
    fire: (webview, eventType, data) => {
      if (webview) {
        if (data !== '') {
          data = data || {}
          if ($.core.isPlainObject(data)) {
            data = JSON.stringify(data || {}).replace(/\'/g, "\\u0027").replace(/\\/g, "\\u005c");
          }
        }
        webview.evalJS("typeof sapp!=='undefined'&&sapp.core.receive('" + eventType + "','" + data + "')")
      }
    }
  }
	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		}
		let evt = document.createEvent('Events')
		let bubbles = true
		for (let name in params) {
			(name === 'bubbles') ? (bubbles = !!params[name]) : (evt[name] = params[name])
		}
		evt.initEvent(event, bubbles, true)
		return evt
	}
})(sapp)