// pages/welcome/welcome.js
Page({
  data: {

  },

  onShow() {
    setTimeout(() => {
      wx.navigateTo({
        url: '../index/index',
      });
    }, 2000)

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000',
    });
  },
})