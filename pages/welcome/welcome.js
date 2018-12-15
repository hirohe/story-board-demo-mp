// pages/welcome/welcome.js
let timers = null;
Page({
  data: {
    timer: 1
  },
  onShow() {
    wx.hideLoading();
    timers = setTimeout(() => {
      wx.navigateTo({
        url: '../index/index',
      });
    }, 1000);
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000',
    });
  },
  onHide() {
    clearInterval(timers);
  }
});