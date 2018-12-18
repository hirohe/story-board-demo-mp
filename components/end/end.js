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
    });

    this.timer = setTimeout(function () {
      animation.translateY(-500).step({duration: 9000});
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  detached() {
    clearInterval(this.timer);
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