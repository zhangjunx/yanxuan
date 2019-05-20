//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    address:"",
    homeData:null
  },
  onLoad: function () {
    var that = this
    wx.getLocation({
      
      success: function(res) {
        console.log(res.latitude)
        console.log(res.longitude)
        // wx.request({
        //   url: `http://apis.juhe.cn/geo/?key=1e35d9210a5ab9953e75cbed4a71fa52&lat=${res.latitude}&lng=${res.longitude}&type=1`,
        //   success:function(result){
        //     console.log(result.data.result.address)
        //     that.setData({
        //       address:result.data.result.address
        //     })
        //   }
        // })
      },
    })
    
  },
  onShow:function(){
    var that=this
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/index/index',
      success:function(res){
        that.setData({
          homeData:res.data
        })
      }
    })
  },
  gotodetail(event){
    console.log(event)
    var pid=event.currentTarget.dataset.pid
      wx.navigateTo({
        url: `/pages/detail/detail?id=${pid}&openId=oQmbb4sNZdxaUQZ0sfYgvtOP2S7c`,
      })
  }
  
})
