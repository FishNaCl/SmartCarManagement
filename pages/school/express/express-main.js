// pages/school/express/express-main.js
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

  /**
   * 组件的方法列表
   */
  methods: {
    onSendExpressBtnClick: function () {
      wx.navigateTo({
        url: './express/express-send/express-send',
      })
    },

    onExpressReceiveBtnClick: function () {
      wx.navigateTo({
        url: './express/express-receive-list/express-receive-list',
      })
    },

    onCardClick: function () {
      wx.navigateTo({
        url: './express/express-detail/express-detail',
      })
    }
  }
})