// pages/scenic/scenic-main.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageCur: 'reservation',
    windowHeight: app.globalData.windowHeight
  },
  onNavChange(e) {
    this.setData({
      pageCur: e.currentTarget.dataset.cur
    })
  },
})