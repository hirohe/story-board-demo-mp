//app.js

App({
  onLaunch: function () {
  },
  onShow() {
  },
  onHide() {
    this.globalData.scence = 1;
    let scence = this.globalData.scence;
    console.log(scence);
    if(scence === 1) {
      wx.redirectTo({
        url: '../index/index',
      })
    }
  },
  globalData: {
    scence: 0,
    preImageScaleStatus: true,
  }
});