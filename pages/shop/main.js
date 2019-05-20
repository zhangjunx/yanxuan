// pages/shop/main.js
import { getCartList } from "../../api/api.js"
var startX=0;
var moveX=0;
var endX=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:null,
    allSelect:false,
    allNum:0,
    selected:0,
    animationData:null,
    currentIndex:0
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
   getCartList().then(function(res){
     console.log(res)
     var list=res.data.data
     list.forEach(item=>{
       item.select=false
     })
     that.setData({
       cartList:list
     })
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
    var index=event.currentTarget.dataset.index
    var list=this.data.cartList
    list[index].select=!list[index].select
    var status=list.every(item=>{
      return item.select==true
    })
    this.setData({
      cartList:list,
      allSelect:status
    })
    this.caclPrice();
  },
  selectAll(){
    var list=this.data.cartList
    var status=!this.data.allSelect
    list.forEach(item=>{
      item.select=status
    })
    this.setData({
      allSelect:status,
      cartList:list
    })
    this.caclPrice();
  },
  caclPrice(){
    var list=this.data.cartList
    var total= list.reduce((total,item)=>{
      if(item.select){
        return total+=item.number*item.retail_price
      }else{
        return total;
      }
    },0)
    var allSelect = list.reduce((total, item) => {
      if (item.select) {
        return total+=1;
      } else {
        return total;
      }
    }, 0)
    this.setData({
      allNum:total,
      selected:allSelect
    })
  },

  touchStart(event){
    startX=event.touches[0].clientX;
  },

  touchMove(event){
    moveX=event.touches[0].clientX;
    var offset=startX-moveX;
    if(offset>30){
      // 重置
      this.initAnimation()
      // 当前动画
      this.setData({
        currentIndex:event.currentTarget.dataset.index
      })
        // 动画
        const animation=wx.createAnimation({
          duration:500,
          timingFunction:"ease",
        })

      

        animation.translateX(-60).step()

      this.setData({
        animationData: animation.export()
      })
    }
  },
  initAnimation(){
    const animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
    })



    animation.translateX(0).step()

    this.setData({
      animationData: animation.export()
    })
  },
  delete(event){
    var that=this
    var index=event.currentTarget.dataset.index
    var pid=event.currentTarget.dataset.id
    wx.showModal({
      title: '删除该商品',
      content: '确定要删除吗',
      success:function(res){
        console.log(res)
        if(res.confirm){
          wx.request({
            url: 'https://www.heyuhsuo.xyz/heyushuo/cart/deleteAction?id='+pid,
            success:function(result){
              if(result.data){
                var list=that.data.cartList
                list.splice(index,1)
                that.setData({
                  cartList:list
                })
                that.initAnimation()
                wx.showToast({
                  title: '删除成功',
                })
              }
            }
          })
        }
      }
    })
  }

})