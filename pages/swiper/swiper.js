// pages/swiper/swiper.js
const moving_threshold = 50;

Page({
  data: {
    startX: null,
    movingX: null,
    moving: false,

    imageList: [{
      url: 'https://miniapp.hirohe.me/images/fcc/clothing-1.jpg'
    },{
      url: 'https://miniapp.hirohe.me/images/fcc/clothing-2.jpg'
    },{
      url: 'https://miniapp.hirohe.me/images/fcc/clothing-3.jpg'
    },{
      url: 'https://miniapp.hirohe.me/images/fcc/clothing-4.jpg'
    },{
      url: 'https://miniapp.hirohe.me/images/fcc/clothing-5.jpg'
    }],
    currentImage: '',
    index: 0,
  },
  onLoad() {
    const { index, imageList } = this.data;
    this.setData({
      currentImage: imageList[index].url
    });
  },
  // 手指触发
  onTouchStart(e) {
    // const startX = e.touches[0].pageX; // 获取触摸时的原点
    // this.setData({ startX });
  },
  // 移动过程
  onTouchMove(e) {
    const { startX, moving } = this.data;
    const touchData = e.touches[0];

    if (!this.data.moving) {
      this.setData({ startX: touchData.clientX, moving: true });
    } else {
      const movingX = touchData.clientX - startX;
      this.setData({ movingX });
    }
  },
  // 移动结束
  onTouchEnd(e) {
    const { movingX } = this.data;

    console.log('movingX', movingX);
    if (Math.abs(movingX) > moving_threshold) {
      this.setData({ startX: null, movingX: null, moving: false });

      if (movingX < 0) {
        this.nextImage();
      } else {
        this.previousImage();
      }
    }
  },

  // 下一页
  nextImage() {
    const { index, imageList } = this.data;
    if (index === imageList.length-1) {
      this.setData({
        currentImage: imageList[index].url,
      }, () => {
        wx.navigateTo({
          url: '../end/end',
        });
      })
    } else {
      this.setData({
        index: index+1
      }, () => {
        const { index } = this.data;
        this.setData({
          currentImage: imageList[index].url,
        })
      })
    }
  },
  // 上一页
  previousImage() {
    const { index, imageList } = this.data;
    if (index <= 0) {
      this.setData({
        currentImage: imageList[index].url,
      },() => {
        wx.navigateTo({
          url: '../index/index',
        });
      })
    } else {
      this.setData({
        index: index-1
      }, () => {
        const { index } = this.data;
        this.setData({
          currentImage: imageList[index].url,
        })
      })
    }
  },
  imageLoadEnd() {
  },
  onHide() {
  }
});