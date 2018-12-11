// components/swiper/SwiperCardContainer.js
Component({
  properties: {
    cards: {
      type: Array,
      value: [],
    },
  },

  data: {
    currentCard: null,
  },

  lifetimes: {
    attached() {
      if (this.data.cards && this.data.cards.length > 0) {
        this.setData({ currentCard: this.data.cards[0] });
      }

      // test
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000',
      });
    },
  },

  methods: {
    onSwipeOut() {
      console.log('onSwipeOut')
      this.setData({ currentCard: null });
    },

    onNextCardTransitionEnd() {
      // test
      setTimeout(() => {
        this.setData({ currentCard: this.data.cards[0] });
      }, 10);
    }
  }
})
