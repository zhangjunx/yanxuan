// pages/category/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      categroylist:null,
      currentIndex:0,
      oneCategroyProduct:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      wx.request({
        url: 'https://www.heyuhsuo.xyz/heyushuo/category/indexaction',
        success:function(res){
          // console.log(res.data.categoryList)
          that.setData({
            categroylist:res.data.categoryList
            
          })
        that.getCurrentProduct(res.data.categoryList[0].id)
        }
      })
  },
  getCurrentProduct(cid){
    var that=this
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/category/currentaction?id='+cid,
      success:function(res){
        // console.log(res)
        that.setData({
          oneCategroyProduct:res.data.data.currentOne
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

  },
  changeStatus(event){
    
    console.log(event)
    this.setData({
      currentIndex: event.currentTarget.dataset.index
    })
    this.getCurrentProduct(event.currentTarget.dataset.id)
  }
})