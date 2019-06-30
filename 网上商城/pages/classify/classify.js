// pages/classify/classify.js
var arr = ["lingshi", "tongzhuang", "meirong", "liangyou"]
Page(

  {
  /**
   * 页面的初始数据
   */
  data: {
    navArr:[
        "零食","童装","美容","特价"
    ],
      listArr:[],
      num:0,
      flag:false,
  },

  
  listBtn:function (e) {
    // wx.navigateTo({
    //   url: "../xiangqing/xiangqing",
    // })
  console.log(e)
wx.navigateTo({
  url: '../xiangqing/xiangqing?id=' + e.currentTarget.id,

})
    console.log(e.currentTarget.id)
  //  setInterval(function(){},1000) 
  },

  
  navBtn:function(e){
    console.log(e)
    this.setData({
      num: e.currentTarget.dataset.num
    })
    
  // console.log(e.currentTarget.dataset.num)

    wx.request({
      url: 'https://www.ucaitop.com/tbsupermarket/GetProducts?                start=0&classify='+arr[this.data.num],
      success: (res) => {
        console.log(res.data)
        if(res.data.length>0){
        this.setData({
          listArr: res.data,
          flag:false
        })
      }
      //证明有商品
      else{
        this.setData({
          listArr:[],
          flag:true
        })
      }
      }
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */


  

  onLoad: function (options) {
    wx.request({
      url: 'https://www.ucaitop.com/tbsupermarket/GetProducts?                 start=0&classify=' + arr[this.data.num],
      success: (res) => {
        console.log(res.data)
        this.setData({
          listArr: res.data
        })
      }
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
  onHide: function (){
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (options){
    

      },
  //     fail: function(res) {},
  //     complete: function(res) {},
  //   })
  // },

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