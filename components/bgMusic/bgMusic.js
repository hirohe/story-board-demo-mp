// components/bgMusic.js
Component({
  properties: {
    src: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    }
  },

  data: {
    play: false,
  },

  lifetimes: {
    attached() {
      this.initAudio();
    }
  },

  methods: {
    initAudio() {
      this.innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.autoplay = this.data.autoplay;
      innerAudioContext.src = this.data.src;
    }
  }
})
