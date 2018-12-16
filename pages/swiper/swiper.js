// pages/swiper/swiper.js

let startX, endX;
let moveFlag = true;// 判断执行滑动事件

Page({
  data: {
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
    startX = e.touches[0].pageX; // 获取触摸时的原点
    moveFlag = true;
  },
  // 移动过程
  onTouchMove(e) {
    endX = e.touches[0].pageX; // 获取触摸时的原点
    if (moveFlag) {
      if (endX - startX > 50) {
        console.log("move right");
        this.beforeImage();
        moveFlag = false;
      }
      if (startX - endX > 50) {
        console.log("move left");
        this.nextImage();
        moveFlag = false;
      }
    }
  },
  // 移动结束
  onTouchEnd(e) {
    moveFlag = true; // 回复滑动事件
  },
  // 滑动
  onSwipeOut(e) {
    console.log(e);
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
  beforeImage() {
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