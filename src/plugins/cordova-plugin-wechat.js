exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof Wechat === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.wechat = Wechat

    return cb(true)

  }, false)
}
