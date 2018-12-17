Page({
  data: {
    animationData: {},
  },
  onShow: function () {
    const animation = wx.createAnimation({
      duration: 100,
    });

    this.animation = animation;
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
  onHide() {
    clearInterval(this.timer);
  },
  onUnload() {
    clearInterval(this.timer);
  }
});