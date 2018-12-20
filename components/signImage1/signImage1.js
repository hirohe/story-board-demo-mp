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
    imageSrc: 'https://cheese-fashion.oss-cn-beijing.aliyuncs.com/wechat/%E9%95%BF%E6%8C%89%E5%9B%BE%E7%89%87%E4%BF%9D%E5%AD%98.jpg',
  },

  ready() {
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
    onImageLoad() {
      // wx.getImageInfo({
      //   src: this.data.imageSrc,
      //   success(res) {
      //     // console.log(res);
      //     wx.saveImageToPhotosAlbum({
      //       filePath: res.path,
      //       success(response) {
      //         // console.log(response)
      //       }
      //     })
      //   }
      // })
    }
  }
});