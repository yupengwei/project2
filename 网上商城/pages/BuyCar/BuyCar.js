// pages/BuyCar/BuyCar.js
var arr
Page(
  
  {

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    listArr:[],
    count:1,
    total:0,
    goodsCount:0,
    qxchecked:true
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = wx.getStorageSync("cart")||[];
    console.log(arr)
    if (arr.length >0) {
      this.setData({
        flag: false,
        listArr: arr
      })
    }
    // console.log(this.data.listArr)
  
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
    arr = wx.getStorageSync("cart");
    this.checkedAll();
   // console.log(arr)
    if (arr.length > 0) {
      this.setData({
        flag: false,
        listArr: arr
      })
    }else{
      this.setData({
        flag:true
      })
    }
   console.log(this.data.listArr)
  
  },


checkedAll:function()
{
    let sum = 0, count = 0, fa=true;
     for(let i = 0; i < arr.length ; i++) {
      if (arr[i].checked == true){
        sum += arr[i].price*arr[i].minCount;
        count += arr[i].minCount;
        }
        else
        {
           fa=false;
        }
     }
        if(sum==0 && count==0){
          this.setData({
            flag:true
          })
        }
        else{
          this.setData({
            listArr:arr,
            total:sum.toFixed(2),
            goodscount:count,
            qxcheched:fa,
            flag:false
          })
        }
      wx.setStorageSync('cart', arr)
    
 },

 dxChecked:function(e){
    console.log(e.target.dataset.id)
    var dxid = e.target.dataset.id;
    arr[dxid].checked = !arr[dxid].checked;
    this.checkedAll();
 },

 allChecked:function(){
    var qx=this.data.qxchecked;
    for(var p=0;p<arr.length; p++){
      arr[p].checked =qx;
    }
    this.checkedAll();
 },



 delGoods:function(e){
    console.log(e)
    var i = e.target.dataset.id;
    arr.splice(i,1);
    this.checkedAll();
    if(arr.length==0){
        this.setData(
          {
            flag:true
          }
        )
    }
 },
  

delCount: function(e){
  // console.log(e)
  let i = e.currentTarget.dataset.id;
  if(arr[i].minCount>1){
    arr[i].checked=true;
    arr[i].minCount--;

    this.checkedAll();
  }

},

addCount: function (e) {
  let i = e.currentTarget.dataset.id;
  if (arr[i].minCount < 99) {
    arr[i].checked = true;
    arr[i].minCount++ ;
    this.checkedAll();
  }

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