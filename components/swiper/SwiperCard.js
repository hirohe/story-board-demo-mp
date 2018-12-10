// components/swiper/SwiperCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageSrc: {
      type: String,
      value: '',
    },
    distanceToSwipe: {
      type: Number,
      value: 100,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    moving: false,
    movingStartX: null,
    movingX: null,
    out: false,
    direction: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTouchStart(e) {
      console.log('on touch start', e.touches[0]);
    },
    onMove(e) {
      const touchData = e.touches[0];
      if (!this.data.moving) {
        // console.log('set start movingX', touchData.clientX)
        this.setData({ movingStartX: touchData.clientX, moving: true });
      } else {
        const movingX = touchData.clientX - this.data.movingStartX;
        // console.log('movingX', movingX)
        this.setData({ movingX })
      }
    },
    onTouchEnd(e) {
      if (Math.abs(this.data.movingX) >= this.data.distanceToSwipe) {
        console.log('out of distance');
        this.setData({
          out: true,
          direction: this.data.movingX > 0 ? 'right' : 'left',
        });
      } else {

      }
      this.setData({ moving: false, movingStartX: null, movingX: null });
    },
    onTransitionEnd(e) {
      if (this.data.out) {
        const { direction } = this.data;
        this.triggerEvent('onswipeout', { direction })
      }
    }
  },
})
