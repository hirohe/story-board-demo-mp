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
    currentFont: '',
  },

  ready() {
    const { fontList, currentIndex } = this.data;
    this.setData({currentFont: fontList[currentIndex]});
    this.timer = setInterval(() => {
      const { fontList, currentIndex } = this.data;
      if(currentIndex === 3) {
        clearInterval(this.timer);
      } else {
        this.setData({ currentIndex: currentIndex+1 }, () => {
          const { currentIndex } = this.data;
          this.setData({ currentFont: fontList[currentIndex]});

        });
      }
    }, 1500)
  },
  detached() {
    this.setData({ currentIndex: 0});
    clearInterval(this.timer);
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
      console.log('sign image 1 on next');
      return true;
    }
  }
});