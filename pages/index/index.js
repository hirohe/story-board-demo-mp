//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    cards: [
      {
        imageSrc: '../../images/takeuchi.jpg',
        statusBarStyle: {
          frontColor: '#ffffff',
          backgroundColor: '#555',
        },
      },
      {
        imageSrc: '../../images/takeuchi-2.jpg',
        statusBarStyle: {
          frontColor: '#ffffff',
          backgroundColor: '#bb983a',
        },
      },
      {
        imageSrc: '../../images/takeo.jpg',
        statusBarStyle: {
          frontColor: '#ffffff',
          backgroundColor: '#000',
        },
      },
    ],

    playStatus: false,  // 播放状态
    inputModalStatus: false // 输入阅读码模态框
  },
  // 去播放
  goPlay() {
    this.setData({
      playStatus: true
    });
  },
  // 展示 输入阅读码 模态框
  changeInputModalStatus(e) {
    console.log(e)
    console.log(e.target.dataset.status);
    this.setData({
      inputModalStatus: true
    });
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onSwipeOut(data) {
    console.log(data);
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
