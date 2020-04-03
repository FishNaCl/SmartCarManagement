// pages/nav-page.js
Page({

  data: {

  },

  onSchoolBtnClick: function () {
    wx.navigateTo({
      url: '/pages/school/school-main',
    })
  }, 

  onScenicBtnClick: function () {
    wx.navigateTo({
      url: '/pages/scenic/scenic-main',
    })
  }
})