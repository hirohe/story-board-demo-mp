//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    welcomeVisible: true,
    playStatus: false,  // 播放状态
    inputModalStatus: false // 输入阅读码模态框
  },
  onLoad() {
    this.timer = setTimeout(() => {
      this.setData({welcomeVisible: false})
    }, 1000);
  },
  onShow() {
    this.setData({
      playStatus: false
    });
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
  // 长按按图片保存
  viewImage() {
    // wx.downloadFile({
    //   url: 'https://miniapp.hirohe.me/images/fcc/cover.jpg',
    //   success:function (res) {
    //     console.log(res);
    //     //图片保存到本地
    //     wx.saveImageToPhotosAlbum({
    //       filePath: res.tempFilePath,
    //       success:function (data) {
    //         wx.showToast({
    //           title: '保存成功'
    //         });
    //       },
    //       fail:function (err) {
    //         console.log(err);
    //         if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
    //           console.log("用户一开始拒绝了，我们想再次发起授权");
    //           console.log('打开设置窗口');
    //           wx.openSetting({
    //             success(settingdata) {
    //               console.log(settingdata);
    //               if (settingdata.authSetting['scope.writePhotosAlbum']) {
    //                 console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
    //               }else {
    //                 console.log('获取权限失败，给出不给权限就无法正常使用的提示')
    //               }
    //             }
    //           })
    //         }
    //       }
    //     })
    //   }
    // })
  },
  onHide() {
    clearInterval(this.timer);
  },
  onUnload() {
    clearInterval(this.timer);
  }
});
