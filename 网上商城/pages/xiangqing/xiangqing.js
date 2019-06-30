// pages/xiangqing/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str:[],
  },

  addCart:function(e){
   let arr = wx.getStorageSync("cart")||[];
   let data = this.data.str;
   let flag = true;
   //证明有商品
   if(arr.length>0){
      for(let i in arr){
      if(arr[i].pro_id==data.pro_id){
        arr[i].minCount++;
        flag=false;
      }
    }
   }

      if(flag){
        data.minCount = 1;
        data.checked=true;
        arr.unshift(data)
   }
      console.log(arr)
      wx.showToast({
      title: '添加成功',
      icon:"success",
      duration:500
      })
      wx.setStorageSync("cart", arr);

      
  },


  play:function(){
    wx.hideLoading();
    this.addCart();
    //wx.getStorageSync("cart", 1);
    wx.switchTab({
      url: '../BuyCar/BuyCar',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    console.log(options)
    wx.request({
      url: 'https://www.ucaitop.com/tbsupermarket/GetProduct?id='+options.id,
      success:(res)=>{
          console.log(res.data)
          this.setData({
            str:res.data
          })
      }
    })

  },

    /**
     *    * 生命周期函数--监听页面初次渲染完成
     * 
     */


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

