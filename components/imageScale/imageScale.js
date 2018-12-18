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
  },

  ready() {
    // this.isCanMove = true;
  },
  detached() {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext() {
      console.log('sign image 1 on next');
      return true;
    },
    // fontStart() {
    //   this.isCanMove = false;
    //   return true;
    // },
    // fontMove() {
    //   this.isCanMove = false;
    //   return true;
    // },
    // fontMoveEnd() {
    //   this.isCanMove = false;
    //   return true;
    // },
  }
});