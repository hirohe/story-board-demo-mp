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
      return this.canMove;
    },
    onRootTouchStart() {
      this.canMove = true;
    },
    fontMove(e) {
      this.canMove = false;
    },
    fontMoveEnd() {
      this.canMove = false;
    },
  }
});