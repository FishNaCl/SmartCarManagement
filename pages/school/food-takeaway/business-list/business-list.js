// pages/school/food-takeaway/business-list/business-list.js
const app = getApp()
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

  },

  lifetimes: {
    attached: function () {

    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCardClick: function () {
      wx.navigateTo({
        url: '/pages/school/food-takeaway/business-menu/business-menu',
      })
    }
  }
})