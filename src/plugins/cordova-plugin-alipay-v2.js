exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof cordova.plugins.alipay === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.alipay = cordova.plugins.alipay

    return cb(true)

  }, false)
}
