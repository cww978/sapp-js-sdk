
import config from '../../../package.json'
function ready(fn) {
	if (window.plus) {
		setTimeout(function() {
			fn()
		}, 0)
	} else {
		document.addEventListener("plusready", function() {
			fn()
		}, false)
	}
}

export default {
	version: config.version,
	ready
}