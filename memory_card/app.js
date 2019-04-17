App({
  onLaunch: function () {
  },
  globalData: {
    userInfo: null,
    version: "1.0",
    shopName: "记忆卡片",
    domain: "http://127.0.0.1:5000/api",
    domain1: "http://127.0.0.1:5000/upload"
  },
  tip: function (params) {
    var that = this;
    var title = params.hasOwnProperty('title') ? params['title'] : '提示信息';
    var content = params.hasOwnProperty('content') ? params['content'] : '';
    wx.showModal({
      title: title,
      content: content,
      success: function (res) {

        if (res.confirm) {//点击确定
          if (params.hasOwnProperty('cb_confirm') && typeof (params.cb_confirm) == "function") {
            params.cb_confirm();
          }
        } else {//点击否
          if (params.hasOwnProperty('cb_cancel') && typeof (params.cb_cancel) == "function") {
            params.cb_cancel();
          }
        }
      }
    })
  },
  alert: function (params) {
    var title = params.hasOwnProperty('title') ? params['title'] : '提示信息';
    var content = params.hasOwnProperty('content') ? params['content'] : '';
    wx.showModal({
      title: title,
      content: content,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {//用户点击确定
          if (params.hasOwnProperty('cb_confirm') && typeof (params.cb_confirm) == "function") {
            params.cb_confirm();
          }
        } else {
          if (params.hasOwnProperty('cb_cancel') && typeof (params.cb_cancel) == "function") {
            params.cb_cancel();
          }
        }
      }
    })
  },
  console: function (msg) {
    console.log(msg);
  },
  getRequestHeader: function () {
    return {
      'content-type': 'application/x-www-form-urlencoded'
    }
  },
  buildUrl: function (path, params) {
    var url = this.globalData.domain + path;
    var _paraUrl = "";
    if (params) {
      _paraUrl = object.keys(params).map(function (k) {
        return [encodeURIComponent(k), encodeURIComponent(params[k])].join("=")
      }).join("&")
      _paraUrl = "?" + _paraUrl;
    }
    return url + _paraUrl;
  },


  buildUrl1: function (path, params) {
    var url = this.globalData.domain1 + path;
    var _paraUrl = "";
    if (params) {
      _paraUrl = object.keys(params).map(function (k) {
        return [encodeURIComponent(k), encodeURIComponent(params[k])].join("=")
      }).join("&")
      _paraUrl = "?" + _paraUrl;
    }
    return url + _paraUrl;
  },

  
  getCache: function (key) {
    var value = undefined;
    try {
      var value = wx.getStorageSync(key);
    } catch (e) {
    }
    return value;
  },
  setCache: function (key, value) {
    wx.setStorage({
      key: key,
      data: value
    });
  }

 
 
})
