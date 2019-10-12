// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    res: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    movie:''
    
  },
  lower() {
    var result = this.data.movie;

    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(i);
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          res: cont
        });
        wx.hideLoading();
      }, 1500)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx: wx.request({
      url: "https://douban.uieee.com/v2/movie/top250/?count="+10,
      data: '',
      header: {
        "content-type": "json"
      },
      method: 'GET',

      success: function (res) {
        console.log(res)
        var movied = res.data.subjects
        that.setData({
          movie: movied
        })
        wx:wx.hideLoading()
      },
      fail: function (res) { },
      complete: function (res) { },
    })
    wx:wx.showLoading({
      title: '正在生成列表...',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
    var that = this
    wx: wx.request({
      url: "https://douban.uieee.com/v2/movie/top250/?count="+20,
      data: '',
      header: {
        "content-type": "json"
      },
      method: 'GET',

      success: function (res) {
        console.log(res)
        var movied = res.data.subjects
        that.setData({
          movie: movied
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})