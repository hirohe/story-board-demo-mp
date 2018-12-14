Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    inputModalStatus: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否显示隐藏模态框
    hideInputModal() {
      this.triggerEvent("hideInputModalStatus", false)
    },
    // 暂时跳转结束页面
    toPlayImage() {
      wx.navigateTo({
        url: '../end/end',
      });
    }
  }
});