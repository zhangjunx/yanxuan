// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productDetail: null,
    productid: null,
    openid: null,
    isShow: false,
    animationData: {},
    number: 1,
    allnum: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      productid: options.id,
      openid: options.openId

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    wx.request({
      url: `https://www.heyuhsuo.xyz/heyushuo/goods/detailaction?id=${this.data.productid}&openId=${this.data.openid}`,
      success: function(res) {
        console.log(res)
        that.setData({
          productDetail: res.data,
          allnum: res.data.allnumber

        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  tanchu() {
    wx.nextTick(() => {
      this.setData({
        isShow: true
      })
    })
    this.show(-250);

  },
  hide() {
    this.show(250);
    setTimeout(() => {
      this.setData({
        isShow: false
      })
    }, 400)
  },
  show(trans) {

    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.translateY(trans).step()

    this.setData({
      animationData: animation.export()
    })
  },
  jia() {
    var num = this.data.number
    this.setData({
      number: num += 1
    })
  },
  jian() {

    var num = this.data.number
    if (num <= 1) {
      return;
    }
    this.setData({
      number: num -= 1
    })
  },
  click() {
    var that = this;
    that.show(-250)
    that.setData({
      isShow: true

    })
    wx.request({
      url: 'https://www.heyuhsuo.xyz/heyushuo/cart/addCart',
      method: 'post',
      data: {
        goodsId: that.data.productid,
        number: that.data.number,
        openId: that.data.openid
      },
      success:function(res){
        // console.log(res)
        if(res.data.data=="success"){
            wx.showToast({
              title: '加入成功',
            })
            let alldata=that.data.productDetail
            alldata.allnumber+=that.data.number
            that.setData({
                productDetail:alldata,
                allnum:alldata.allnumber
            })
        }
      }
    })

  },
  back(){
   console.log("run")
   wx.navigateBack({
     
   })
  }
})