// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisWeekMovie: [{
      name: "教父",
      comment: "最精彩的剧本，最真实的黑帮电影。",
      imagePath: "/images/jf.jpg",
      isHightlyRecommended: true,
      id:19
    },
    {
      name: "泰坦尼克号",
      comment: "失去的才是永恒的。",
      imagePath: "/images/titanic.jpg",
      isHightlyRecommended: true,
      id: 5
    },
    {
      name: "这个杀手不太冷",
      comment: "失去的才是永恒的。",
      imagePath: "/images/leon.jpg",
      isHightlyRecommended: true,
      id: 3
    }
    ],
    count:'123',
    currentIndex:0
  },
  
  f0: function (e) {
    console.log(e)
    this.setData({
      currentIndex: this.data.thisWeekMovie.length - 1
    })
  },
  f1:function(e){

    var movieId = e.currentTarget.dataset.movieId

    wx:wx.navigateTo({
      url: '../detail/detail?id=' +movieId,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  f2:function(){
    wx:wx.navigateTo({
      url: '../list/list',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.thisWeekMovie.length-1
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
    return {
      title:'每周推荐'
    }
  }
  })