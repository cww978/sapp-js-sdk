/**
 * sapp
 * @author cww
 * @since 2020-03-01
 */
(function(window){
	const readyRE = /complete|loaded|interactive/
	window.sapp = {
	  ready: (callback) => {
			if (window.plus) {
				setTimeout(function() {
					callback()
				}, 0)
			} else {
				document.addEventListener("plusready", function() {
					callback()
				}, false)
			}
			return this
		}
	}
})(window)

