
Page({

  data: {
    
        shows: "",
        name: "泰坦尼克号",
    comment: "失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒的失去的才是永恒",
        id:0,
        imagePath: "/image/timg.jpeg",
        isHighlyRecommended: false,
      },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      mid:options.id
    })
    // 发起请求api
    wx.request({
      url: '',
    })

  },
  success:function(res){

  },
  fail:function(){

  },
  complete:function(){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})