module.exports = function(imageSrc) {
  return Behavior({
    methods: {
      onLongPress() {
        wx.showToast({
          title: '保存中',
          icon: 'loading',
        })
        wx.getImageInfo({
          src: imageSrc,
          success(res) {
            wx.saveImageToPhotosAlbum({
              filePath: res.path,
              success(response) {
                wx.showToast({
                  title: '保存成功',
                  icon: 'success',
                })
              },
              fail() {
                wx.showToast({
                  title: '保存失败',
                  icon: 'none',
                })
              }
            })
          }
        })
      }
    }
  })
}