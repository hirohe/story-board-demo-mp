const moving_threshold = 50;
const data = getApp();
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageStatus: true,

    startX: null,
    movingX: null,
    moving: false,

    smallStartX: null,
    smallMovingX: null,
    smallMoving: false,

    animationData: null,
  },

  ready() {
    this.canMove = true;

    this.setData({
      imageStatus: data.globalData.preImageScaleStatus
    });
  },
  detached() {
    const { imageStatus } = this.data;
    data.globalData.preImageScaleStatus = imageStatus;
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext() {
      console.log('sign image 1 on next');
      return this.canMove;
    },
    onRootTouchStart() {
      this.canMove = true;
    },
    fontMove(e) {
      this.canMove = false;
    },

    fullImageMove(e) {
      const { startX, moving } = this.data;
      const touchData = e.touches[0];

      if (!this.data.moving) {
        this.setData({ startX: touchData.clientX, moving: true });
      } else {
        const movingX = touchData.clientX - startX;
        this.setData({ movingX });
      }
      this.canMove = false;
    },

    fullImageEnd(e) {
      const { movingX } = this.data;

      if (Math.abs(movingX) > moving_threshold) {
        this.setData({ startX: null, movingX: null, moving: false });
        if (movingX < 0) {
          this.canMove = false;
          // 下一页,去做动画效果
          this.imageToSmall();
        } else {
          // 上一页
          this.canMove = true;
        }
      }
    },
    // 图片变小
    imageToSmall() {
      const animation = wx.createAnimation({
        duration: 1500,
      });
      animation.opacity(0).step();
      this.setData({
        animationData: animation.export()
      });
    },

    // 图片变大
    imageToBig() {
      const animation = wx.createAnimation({
        duration: 100,
      });

      animation.scaleY(1).step();

      this.setData({
        animationData: animation.export()
      });
    },

    onTransitionEnd() {
      this.setData({
        imageStatus: false
      });
    },
    smallImageMove(e) {

      const { smallStartX, smallMoving } = this.data;
      const touchData = e.touches[0];

      if (!this.data.smallMoving) {
        this.setData({ smallStartX: touchData.clientX, smallMoving: true });
      } else {
        const smallMovingX = touchData.clientX - smallStartX;
        this.setData({ smallMovingX });
      }
      this.canMove = false;
    },

    samllImageEnd(e) {
      const { smallMovingX } = this.data;
      if (Math.abs(smallMovingX) > moving_threshold) {
        this.setData({ smallStartX: null, smallMovingX: null, smallMoving: false });
        if (smallMovingX < 0) {
          this.canMove = true;
        } else {
          this.canMove = false;
          // 上一页,去切换
          this.imageToBig();
          this.setData({
            imageStatus: true
          });
        }
      }
    },
  }
});