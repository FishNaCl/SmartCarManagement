// pages/school/school-main.js
const app = getApp();
Page({
  data: {
    pageCur: 'food-takeaway',
    windowHeight: app.globalData.windowHeight
  },

  onNavChange(e) {
    this.setData({
      pageCur: e.currentTarget.dataset.cur
    })
  },
})