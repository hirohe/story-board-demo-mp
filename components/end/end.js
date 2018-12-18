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
    animationData: {},
  },

  ready() {
    const animation = wx.createAnimation({
      duration: 100,
    });

    animation.translateY(0).step();

    this.setData({
      animationData: animation.export()
    }, () => {
      this.timer = setTimeout(() => {
        animation.translateY('-100%').step({ duration: 15000 });
        this.setData({
          animationData: animation.export()
        });
      }, 2000);
    });
  },
  detached() {
    this.timer && clearTimeout(this.timer);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onNext() {
      console.log('sign image 1 on next');
      return true;
    }
  }
});