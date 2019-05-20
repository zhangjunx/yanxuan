// pages/topic/main.js
var a=1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicList:null
  },

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
    var that=this
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/topic/listaction?page='+a,
      success:function(res){
        console.log(res.data.data)
        that.setData({
          topicList: res.data.data
        })
      }
    })
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
    var that = this
    a=1
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/topic/listaction?page='+a,
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          topicList: res.data.data
        })
        wx.hideLoading()
        wx.stopPullDownRefresh({})
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    a+=1
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/topic/listaction?page=' + a,
      success: function (res) {
        if(res.data.data.length==0){
          wx.hideLoading()
          wx.showToast({
            title: '已经加载完毕',
          })
          a--;
        }
        console.log(res.data.data)
        that.setData({
          topicList: [...that.data.topicList,...res.data.data]
        })
        wx.hideLoading()
        console.log(a)
       
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})