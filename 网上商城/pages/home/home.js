// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls: [
        'http://img95.699pic.com/element/40131/9310.png_300.png',
        'http://img95.699pic.com/element/40131/9314.png_300.png',
        'http://img95.699pic.com/element/40131/6577.png_300.png',
        'http://img95.699pic.com/element/40131/6623.png_300.png',
        'http://img95.699pic.com/element/40131/6669.png_300.png',
    ],

        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,

      pictures:[
        
        '/images/QQ图片20180607190958.jpg',
        '/images/QQ图片20180607203350.jpg',
        '/images/QQ图片20180607203359.jpg',
        '/images/QQ图片201806072034536.jpg',
     
  ]
  },

  //事件处理函数
  toupper: function () {
    console.log("触发了toupper");
  },



  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

