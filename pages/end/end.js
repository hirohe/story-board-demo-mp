Page({
  data: {
    roleList: [{
      desc: '出品人Producer',
      name: '刘馨亦Angela'
    },{
      desc: '监制Executive Producer',
      name: '刘倚彤Fiona'
    },{
      desc: '策划&编辑Production&Editor',
      name: '芒果mango'
    },{
      desc: '艺人统筹Artist Adminitration',
      name: '刘倚彤Fiona'
    },{
      desc: '摄影 Photograph',
      name: 'Edwin Zhang'
    },{
      desc: '视频团队Film Team',
      name: '王聪Cong'
    },{
      desc: '造型Styulist',
      name: '大圆圆Rita'
    },{
      desc: '发型Hair',
      name: 'Kevin'
    },{
      desc: '现场摄影SetPhotographer',
      name: '关爱子Rebecca'
    },{
      desc: '文案编辑Junior Editor',
      name: '王毅文Winnne'
    },{
      desc: '图片制作photographEditor',
      name: '常馨予Cici'
    }],
    animationData: {},
  },
  onShow: function () {
    const animation = wx.createAnimation({
      duration: 100,
    });

    this.animation = animation;
    animation.translateY(0).step();

    this.setData({
      animationData: animation.export()
    });

    this.timer = setTimeout(function () {
      animation.translateY(-500).step({duration: 9000});
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  onHide() {
    clearInterval(this.timer);
  },
  onUnload() {
    clearInterval(this.timer);
  }
});