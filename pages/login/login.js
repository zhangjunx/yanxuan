// pages/login/login.js
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
  onGotUserInfo(){
    wx.getUserInfo({
      success:function(res){
        console.log(res)
        wx.setStorageSync("login", true)
        wx.navigateBack({
          
        })
      }
    })
  }
})
// 完整登录流程
// wx.getUserInfo({
//   success:function(res){
//     // 在这里进行后台请求
//     wx.login({
//       success:function(res){
//         console.log(res.code)
//         wx.request({
//           url: '',
//           data:{
//             code:res.code,
//             userInfo:userInfo
//           },
//           success:function(){
//             wx.setStorageSync("login",true)
//             wx.navigateBack({
              
//             })
//           }
//         })
//       }
//     })
//   }
// })