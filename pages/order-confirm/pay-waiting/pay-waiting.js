// pages/order-confirm/pay-waiting/pay-waiting.js
Page({
  data: {

  },

  onPayConfirmBtnClick: function () {
    wx.navigateTo({
      url: '../pay-result/pay-result',
    })
  }
})