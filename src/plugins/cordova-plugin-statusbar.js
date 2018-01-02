exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.StatusBar === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.statusBar = window.StatusBar

    return cb(true)

  }, false)
}
