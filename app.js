//app.js

App({
  onLaunch: function () {
    // wx.reLauch({
    //   url: './pages/index/index',
    // })
  },
  onShow() {
    console.log('onShow')
    let scence = this.globalData.scence;
    if(scence) {
      wx.redirectTo({
        url: '../pages/index/index',
      })
    }
  },
  onHide() {
    this.globalData.scence = 1;
    console.log('hide')
  },
  globalData: {
    scence: 0,
  }
});