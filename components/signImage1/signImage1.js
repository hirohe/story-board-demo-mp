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
      return true;
    },
    onImageLoad() {
      wx.getImageInfo({
        src: 'http://pjpgeagds.bkt.clouddn.com/%E5%90%8D%E5%AD%97.png',
        success(res) {
          console.log(res)
        }
      })
    }
  }
});