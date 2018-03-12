var common = require("../../../data/data.js");
console.log(common)

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
    var id = options.id;
    
    this.setData({
      deitel: common.deitel[id],
      imgSrc:common.imgSrc[id],
      detailed: common.detailed[id]
    })
  },
  //打开地图
  openMap:function(){
    var latitude = this.data.detailed.latitude;
    var longitude = this.data.detailed.longitude;
    var name=this.data.detailed.title;
    var address=this.data.detailed.addr;
    console.log(latitude)
    console.log(longitude)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 10,
      name:name,
      address:address
    })
  },
call:function(){
var tel=this.data.detailed.tel; 
  wx.makePhoneCall({
    phoneNumber: tel //仅为示例，并非真实的电话号码
  })
},
 preImg:function(ev){
   console.log(ev)
   console.log(this.data)
   var index=ev.currentTarget.dataset.idx;
    wx.previewImage({
      current: this.data.imgSrc.prevview[index],
       // 当前显示图片的http链接
      urls: this.data.imgSrc.prevview
       // 需要预览的图片http链接列表
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
    
  }
})