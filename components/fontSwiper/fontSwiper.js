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
    fontList: ['每个人都是自己的王', '面具下永远有一个捧着初心的男孩儿', '舞台,是选择 是热爱 是拼搏', 'Who Am I'],
    currentIndex: 0,
    currentFont: '每个人都是自己的王',

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