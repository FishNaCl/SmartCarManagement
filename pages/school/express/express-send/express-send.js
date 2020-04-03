// pages/school/express/express-send/express-send.js
Page({
  data: {
    time: '12:01',
    date: '2019-12-25',
  },

  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },

  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  onSubmit: function () {
    wx.navigateTo({
      url: '/pages/order-confirm/pay-waiting/pay-waiting',
    })
  }
})