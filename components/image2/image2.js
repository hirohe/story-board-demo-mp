const moving_threshold = 50;
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
    startX: null,
    movingX: null,
    moving: false,
    animationData: null,
  },

  ready() {
  },
  detached() {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext() {
      console.log('sign image 1 on next');
      return this.canMove;
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
      this.canMove = true;
      this.triggerEvent('nextComponent');
    },
  }
});