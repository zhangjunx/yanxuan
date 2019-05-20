var app=getApp();

export function getCartList(fn){
  var promise=new Promise(function(resolved,rejected){
    wx.request({
      url: app.globalData.baseurl + "cart/cartList",
      data: {
        openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"
      },
      success: function (res) {
        resolved(res)
      }
    })
  })
  return promise;
  
}