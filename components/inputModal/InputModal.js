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
  data: {
    read_code: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否显示隐藏模态框
    hideInputModal() {
      this.triggerEvent("hideInputModalStatus", false);
    },
    // 填写阅读码跳转页面
    toPlayImage() {
      const { read_code } = this.data;
      if(!read_code) {
        wx.showToast({
          title: '请输入阅读码!',
          icon: 'none'
        })
      } else {
        this.triggerEvent('writeCode', read_code);
      }
    },
    bindInputChange(e) {
      this.setData({read_code: e.detail.value});
    }
  }
});