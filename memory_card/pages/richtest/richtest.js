
var app = getApp()
var list = []
Page({
  data: {
    content: '',
    height: 500,
    width: 320,
    imgIndex: 0,
    imageLength: 0,
    firstCon: '',
    dataList: [],
    mHidden: true
  },
  onLoad: function (options) {
    let that = this
  },
  onShow: function (e) {
    var that = this;
    //动态获取屏幕尺寸
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
          width: res.windowWidth,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 输入监听
   */
  inputCon: function (e) {
    let that = this;
    if (0 === e.currentTarget.id - 0) {//第一个文本框的输入监听
      that.data.firstCon = e.detail.value;
    } else {
      that.data.dataList[e.currentTarget.id - 1].value = e.detail.value;
    }
  },
  /**
   * 失去焦点监听
   * 根据失去监听的input的位置来判断图片的插入位置
   */
  outBlur: function (e) {
    let that = this;
    that.data.imgIndex = e.currentTarget.id - 0;
  },








  /**
   * 添加图片
   */
  // addImg: function () {
  //   var that = this;
  //   //这里考虑到性能，对于图片张数做了限制
  //   if (that.data.dataList.length >= 100) {//超过四张
  //     wx.showModal({
  //       title: '提示',
  //       content: '最多只能添加四张图片哦',
  //       confirmText: "我知道了",
  //       confirmColor: "#ef8383",
  //       showCancel: false,
  //       success: function (res) {
  //         if (res.confirm) {
  //         } else if (res.cancel) {
  //         }
  //       }
  //     })
  //   } else {//添加图片
  //     wx.showActionSheet({
  //       itemList: ['从相册选择', '拍照'],
  //       itemColor: '#ef8383',
  //       success: function (res) {
  //         var choseType = res.tapIndex == 0 ? "album" : res.tapIndex == 1 ? "camera" : "";
  //         if (choseType != "") {
  //           wx.chooseImage({
  //             sizeType: ['original'],//原图
  //             sourceType: [choseType],
  //             count: 1,//每次添加一张
  //             success: function (res) {
  //               var info = {
  //                 pic: res.tempFilePaths[0],//存储本地地址
  //                 temp: true,//标记是否是临时图片
  //                 value: '',//存储图片下方相邻的输入框的内容
  //               }
  //               that.data.dataList.splice(that.data.imgIndex, 0, info);//方法自行百度
  //               that.setData({
  //                 dataList: that.data.dataList,
  //               })
  //             }
  //           })
  //         }
  //       },
  //       fail: function (res) {
  //         console.log(res.errMsg)
  //       }
  //     })
  //   }
  // },

  addImg() {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        upload(that, tempFilePaths);
      }
    })
  },










  /**
   * 删除图片
   */
  deletedImg: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    wx.showActionSheet({
      itemList: ['删除图片'],
      success: function (res) {
        if (res.tapIndex === 0) {//点击删除图片
          if (index === 0 && that.data.dataList[index].value != null) {//删除第一张，要与最上方的textarea合并
            that.data.firstCon = that.data.firstCon + that.data.dataList[index].value;
          } else if (index > 0 && that.data.dataList[index].value != null) {
            that.data.dataList[index - 1].value = that.data.dataList[index - 1].value + that.data.dataList[index].value;
          }
          that.data.dataList.splice(index, 1);
          that.setData({
            firstCon: that.data.firstCon,
            dataList: that.data.dataList
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  //失败警告
  do_fail: function (a) {
    wx.showToast({
      title: a,
      icon: 'none',
      duration: 1000
    })
  },


  changeModel: function () {

    this.setData({
      mHidden: true
    });

  },
  modelCancel: function () {
    this.setData({
      mHidden: true
    });
  },
  chongmingmingTap: function () {
    this.setData({
      mHidden: false
    });
  },
  sousuoTap: function () {
    this.setData({
      mHidden: false
    });
  },
  sousuoModel: function () {

    this.setData({
      mHidden: true
    });

  },
  sousuoCancel: function () {
    this.setData({
      mHidden: true
    });
  },

   onShareAppMessage: function () {
    return {
      title: "在线编辑"
    }
  }
})

function upload(page, path) {
  var uid = app.getCache("token");
  var num = uid.indexOf('#');
  uid = uid.substr(num + 1);
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    wx.uploadFile({
    url: app.buildUrl1("/?id="+uid),
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}
