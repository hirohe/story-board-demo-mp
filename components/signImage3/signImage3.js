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
    signStatus: true
  },

  ready() {
  },
  detached() {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideSign() {
      this.setData({signStatus: false})
    },
    onNext() {
      console.log('sign image 1 on next');
      return true;
    }
  }
});