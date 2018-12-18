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
    modalStatus: false
  },

  ready() {
  },
  detached() {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModal() {
      this.setData({modalStatus: true})
    },
    hideModal() {
      this.setData({modalStatus: false})
    },
  }
});