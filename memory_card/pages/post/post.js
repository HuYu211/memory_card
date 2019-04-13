var initdata = function (that) {
  var list = that.data.list
  for (var i = 0; i < list.length; i++) {
    list[i].shows = ""
  }
  that.setData({
    list: list
  })
}
var app = new getApp();
Page({

  data: {
    weeklyMovieList: [
      {
        shows: "",
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        id:0,
        // imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
      },
      {
        shows: "",
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        id:1,
        // imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
      },
      {
        shows: "",
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        id:2,
        // imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
      },
      {
        shows: "",
        name:"我也2",
        comment:"3333",
        id:3,
      },
     
      {
        shows: "",
        name: "我也2",
        comment: "3333",
        id:4,
      }, 
      {
        shows: "",
        name: "我也2",
        comment: "3333",
        id:4,
      }, 
      {
        shows: "",
        name: "我也2",
        comment: "3333",
        id: 4,
      }, {
        shows: "",
        name: "我也2",
        comment: "3333",
        id: 4,
      }, {
        shows: "",
        name: "我也2",
        comment: "3333",
        id: 4,
      }, {
        shows: "",
        name: "我也2",
        comment: "3333",
        id: 4,
      }, 
    ],
    count: 0,
    score: 61
  },

  // 点击左上角小图标事件
  onTap: function (event) {
    wx.navigateTo({
      url: "/pages/info/info"
    });

    // wx.switchTab({
    // url: "/pages/post/post"
    // });

  },
  onTap1: function (event) {
    wx.navigateTo({
      url: "/pages/richtest/richtest"
    });
    
  },
  onTap2: function (event) {
    var textId = event.currentTarget.dataset.textId;
    console.log(textId);
    wx.navigateTo({
      url: "/pages/detial/detial?id=" + textId
    });

  },
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  },

  tap_start: function (e) {
    // touchstart事件
    // 把手指触摸屏幕的那一个点的 x 轴坐标赋值给 mark 和 newmark
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },

  tap_drag: function (e) {
    // touchmove事件
    this.data.newmark = e.touches[0].pageX;

    // 手指从左向右移动
    if (this.data.mark  < this.data.newmark) {
      this.istoright = true;
    }

    // 手指从右向左移动
    if (this.data.mark > this.data.newmark) {
      this.istoright = false;
    }
    this.data.mark = this.data.newmark;
  },

  tap_end: function (e) {
    // touchend事件
    this.data.mark = 0;
    this.data.newmark = 0;
    // 通过改变 opne 的值，让主页加上滑动的样式
    if (this.istoright) {
      this.setData({
        open: true
      });
    } else {
      this.setData({
        open: false
      });
    }
  },


  

})