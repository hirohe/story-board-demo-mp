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
    changeInputModal(e) {
      this.triggerEvent("hideInputModalStatus", false)
    },
  }
});