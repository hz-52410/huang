// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      mid: options.id
    })
    var that=this
    wx:wx.request({
      url: "https://douban.uieee.com/v2/movie/top250/",
      data: '',
      header: {
        "content-type":"json"
      },
      method: 'GET',

      success: function(res) {
        console.log(res)
        var movied = res.data.subjects[that.data.mid]
        that.setData({
          movie: movied,
          loading:true
        })
       
        wx:wx.hideNavigationBarLoading()  //加载loading动画隐藏
        wx:wx.hideLoading()
        wx: wx.setNavigationBarTitle({ //动态设置标题
          title: that.data.movie.rating.average + "分：" + that.data.movie.title,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx:wx.showNavigationBarLoading()  //加载loading动画显示  
    wx:wx.showLoading({
      title: '加载中',
      mask: true,
      success: function(res) {
        that.setData({
          loading:false
        })
      },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title: "向你推荐："+ this.data.movie.title,
    }
  }
})