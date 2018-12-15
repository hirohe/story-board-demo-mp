//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
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
  showInputModalStatus() {
    this.setData({
      inputModalStatus: true
    });
  },
  // 隐藏 输入阅读码 模态框
  hideInputModalStatus() {
    this.setData({
      inputModalStatus: false
    });
  },
  onShow() {},
  onLoad: function () {},
});
