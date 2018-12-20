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
    fontList: [
      'http://pjpgeagds.bkt.clouddn.com/%E8%A1%94%E6%8E%A51.jpg',
      'http://pjpgeagds.bkt.clouddn.com/%E8%A1%94%E6%8E%A52.jpg',
      'http://pjpgeagds.bkt.clouddn.com/%E8%A1%94%E6%8E%A53.jpg',
      'http://pjpgeagds.bkt.clouddn.com/%E8%A1%94%E6%8E%A54.jpg',
    ],
    currentIndex: 0,
    currentFont: 'http://pjpgeagds.bkt.clouddn.com/%E8%A1%94%E6%8E%A51.jpg',

    fontOpacity: 0,
  },

  ready() {
    const { fontList, currentIndex } = this.data;

    this.timer = setTimeout(() => {
      this.setData({ currentFont: fontList[currentIndex], fontOpacity: 1 });
    }, 500)
  },
  detached() {
    this.setData({ currentIndex: 0});
    clearTimeout(this.timer);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否显示隐藏模态框
    hideInputModal() {
      this.triggerEvent("hideInputModalStatus", false);
    },
    onNext() {
      return true;
    },
    onTransitionEnd() {
      const { fontList, currentIndex } = this.data;
      if (this.data.fontOpacity === 1) {
        if (currentIndex !== fontList.length - 1) {
          this.setData({ fontOpacity: 0 });
        } else {
          this.triggerEvent('nextComponent');
        }
      } else {
        if (currentIndex !== fontList.length - 1) {
          this.setData({
            currentIndex: currentIndex + 1,
            currentFont: fontList[currentIndex + 1],
            fontOpacity: 1,
          });
        }
      }
    },
  }
});