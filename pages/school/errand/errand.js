// pages/school/errand/errand.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    time: '12:01',
    date: '2019-12-25',
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
  }
})
