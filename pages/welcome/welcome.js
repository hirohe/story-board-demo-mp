// pages/welcome/welcome.js
let timers = null;
Page({
  data: {
    timer: 1
  },
  onShow() {
    timers = setTimeout(() => {
      wx.navigateTo({
        url: '../index/index',
      });
    }, 2000)

    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000',
    });
  },
  onHide() {
    clearInterval(timers);
  }
});