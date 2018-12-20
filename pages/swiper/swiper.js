// pages/swiper/swiper.js
const moving_threshold = 50;
const backgroundMusicSrc = 'http://pjpgeagds.bkt.clouddn.com/%E5%8D%9C%E5%87%A1%20_%20%E9%99%88%E7%AB%8B%E5%86%9C%20_%20%E7%A7%A6%E5%A5%8B%20_%20%E8%94%A1%E5%BE%90%E5%9D%A4%20_%20%E5%BE%90%E5%9C%A3%E6%81%A9%20_%20%E8%8C%83%E4%B8%9E%E4%B8%9E%20_%20%E9%92%B1%E6%AD%A3%E6%98%8A%20_%20%E7%8E%8B%E5%AD%90%E5%BC%82%20_%20%E6%9C%B1%E6%AD%A3%E5%BB%B7%20_%20%E6%9C%B1%E6%98%9F%E6%9D%B0%20-%20Mack%20Daddy%20%28Live%29.mp3';

Page({
  data: {
    startX: null,
    movingX: null,
    moving: false,

    backgroundMusicPlaying: false,// 音乐播放状态
    play_stop_btn: true,     // 播放，暂停按钮显示隐藏
    preMusicStatus: false,  // 进入视频之前音乐的状态
    linkStatus: false,       // 箭头状态

    componentNameList: [
      'sign-image-1',
      'sign-image-2',
      'sign-image-3',
      'sign-image-4',
      'image1',
      'image-scale1',
      'image2',
      'image3',
      'image4',
      'image5',
      'image6',
      'font-swiper',
      'video',
      'dress-show-1',
      'dress-show-2',
      'dress-show-3',
      'dress-show-4',
      'dress-show-5',
      'video1',
      'end',
    ],
    currentComponentName: '',
    currentComponentIndex: 0,
  },
  onLoad() {
    const { currentComponentIndex, componentNameList } = this.data;
    this.setData({
      currentComponentName: componentNameList[currentComponentIndex]
    });

    this.initBackgroundMusic();
  },
  // 手指触发
  onTouchStart(e) {
    // const startX = e.touches[0].pageX; // 获取触摸时的原点
    // this.setData({ startX });
  },
  // 移动过程
  onTouchMove(e) {
    const { startX, moving } = this.data;
    const touchData = e.touches[0];

    if (!this.data.moving) {
      this.setData({ startX: touchData.clientX, moving: true });
    } else {
      const movingX = touchData.clientX - startX;
      this.setData({ movingX });
    }
  },
  // 移动结束
  onTouchEnd(e) {
    const { movingX } = this.data;

    if (Math.abs(movingX) > moving_threshold) {
      this.setData({ startX: null, movingX: null, moving: false });

      if (movingX < 0) {
        this.nextComponent();
      } else {
        this.previousComponent();
      }
    }
  },

  // 下一页
  nextComponent() {
    if (!this.selectComponent('.slide').onNext()) return;

    console.log('on next');
    const { currentComponentIndex, componentNameList } = this.data;
    if (currentComponentIndex === componentNameList.length - 1) { // last one
      this.setData({
        currentComponentName: componentNameList[currentComponentIndex],
      })
    } else {
      const index = currentComponentIndex + 1;

      // 控制箭头
      let name = componentNameList[index];
      if(name === 'video' || name === 'video1' || name === 'font-swiper' || name === 'sign-image-1' || name === 'end') {
        this.setData({linkStatus: false}); // 隐藏箭头
      }else {
        this.setData({linkStatus: true});// 展示箭头
      }

      // 控制播放器
      if(componentNameList[index] === 'video' || componentNameList[index] === 'video1') {
        // 保存进入视频之前的音乐状态
        const { backgroundMusicPlaying } = this.data;
        this.setData({preMusicStatus: backgroundMusicPlaying});
        this.pauseBackgroundMusic();
      } else {
        const { play_stop_btn } = this.data;
        if(!play_stop_btn) {
          this.setData({play_stop_btn: true}, () => {
            const { preMusicStatus } = this.data;
            if(preMusicStatus) {
              this.playBackgroundMusic();
            }
          });
        }
      }
      this.setData({
        currentComponentIndex: index,
        currentComponentName: componentNameList[index],
      })
    }
  },
  // 上一页
  previousComponent() {
    if (!this.selectComponent('.slide').onNext()) return;
    console.log('on previous');
    const { currentComponentIndex, componentNameList } = this.data;
    if (currentComponentIndex <= 0) {
      this.setData({
        currentComponentName: componentNameList[currentComponentIndex],
      })
    } else {
      const index = currentComponentIndex - 1;

      // 控制箭头
      let name = componentNameList[index];
      if(name === 'video' || name === 'video1' || name === 'font-swiper' || name === 'sign-image-1' || name === 'end') {
        this.setData({linkStatus: false}); // 隐藏箭头
      }else {
        this.setData({linkStatus: true});// 展示箭头
      }

      // 控制播放器
      if(componentNameList[index] === 'video' || componentNameList[index] === 'video1') {
        // 保存进入视频之前的音乐状态
        const { backgroundMusicPlaying } = this.data;
        this.setData({preMusicStatus: backgroundMusicPlaying});
        this.pauseBackgroundMusic();
      } else {
        const { play_stop_btn } = this.data;
        if(!play_stop_btn) {
          this.setData({play_stop_btn: true}, () => {
            const { preMusicStatus } = this.data;
            if(preMusicStatus) {
              this.playBackgroundMusic();
            }
          });
        }
      }
      this.setData({
        currentComponentIndex: index,
        currentComponentName: componentNameList[index],
      })
    }
  },

  initBackgroundMusic() {
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.autoplay = true;
    this.innerAudioContext.src = backgroundMusicSrc;
    this.innerAudioContext.onPlay(() => {
      this.setData({ backgroundMusicPlaying: true });
    });
    this.innerAudioContext.onPause(() => {
      this.setData({ backgroundMusicPlaying: false });
    });
  },

  triggerBackgroundMusic() {
    if (this.innerAudioContext) {
      if (this.data.backgroundMusicPlaying) {
        console.log('set pause');
        this.innerAudioContext.pause();
      } else {
        console.log('set play');
        this.innerAudioContext.play();
      }
    }
  },

  pauseBackgroundMusic() {
    this.setData({play_stop_btn: false}, () => {
      this.innerAudioContext && this.innerAudioContext.pause();
    });
  },
  playBackgroundMusic() {
    this.innerAudioContext && this.innerAudioContext.play();
  },
  onUnload() {
    this.innerAudioContext && this.innerAudioContext.pause();
  },
});