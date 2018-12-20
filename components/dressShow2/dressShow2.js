const saveImageToAlbum = require('../../behaviors/saveImageToAlbum');
const imageSrc = 'https://cheese-fashion.oss-cn-beijing.aliyuncs.com/wechat/2-11%403x.png';

Component({
  behaviors: [saveImageToAlbum(imageSrc)],
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
    onNext() {
      console.log('sign image 1 on next');
      return true;
    }
  }
});