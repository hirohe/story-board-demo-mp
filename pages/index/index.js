//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    welcomeVisible: true,
    playStatus: false,  // 播放状态
    inputModalStatus: false, // 输入阅读码模态框

    id: '', // 用户id
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
    wx.showLoading({title: '加载中'});
    const self = this;
    wx.login({
      success(res) {
        const code = res.code;
        wx.request({
          method: 'GET',
          url: 'https://www.1027lp.cn/api/index/getuserinfo',
          data: { code },
          success(res) {
            if(res.statusCode === 200 && res.data && res.data.code === 200) {
              const { is_get, id } = res.data.data;
              self.setData({ id });
              // 没有拿到阅读码
              if(is_get === 0) {
                self.setData({
                  playStatus: true
                });
              } else {   // 获取阅读码之后跳转
                wx.navigateTo({
                  url: '../swiper/swiper'
                })
              }
            } else {
              wx.showToast({
                title: '当前访问人数过多，请重试!',
                icon: 'none'
              });
            }
          },fail() {
            wx.showToast({
              title: '当前访问人数过多，请重试!',
              icon: 'none'
            });
          },complete() {
            wx.hideLoading();
          }
        })
      },fail() {
        wx.showToast({
          title: '当前访问人数过多，请重试!',
          icon: 'none'
        });
      }
    });
  },
  // 填写阅读码观看
  writeCode({ detail }) {
    const self = this;
    const { id } = this.data;
    wx.showLoading({title: '加载中'});
    wx.request({
      method: 'POST',
      url: 'https://www.1027lp.cn/api/index/checkreadcode',
      data: { id, read_code: detail },
      success(res) {
        if(res.statusCode === 200 && res.data && res.data.code === 200) {
          wx.navigateTo({
            url: '../../pages/swiper/swiper',
          });
          self.hideInputModalStatus();
        } else {
          const { msg='当前访问人数过多，请重试!' } = res.data;
          wx.showToast({
            title: msg,
            icon: 'none'
          });
        }
      },fail() {
        wx.showToast({
          title: '当前访问人数过多，请重试!',
          icon: 'none'
        });
      },complete() {
        wx.hideLoading();
      }
    })
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
  onHide() {
    clearInterval(this.timer);
  },
  onUnload() {
    clearInterval(this.timer);
  }
});
