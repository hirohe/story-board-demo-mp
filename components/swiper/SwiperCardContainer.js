// components/swiper/SwiperCardContainer.js
Component({
  properties: {
    cards: {
      type: Array,
      value: [],
    },
  },

  data: {
    index: 0,
    nextIndex: 0,
    currentCard: null,
    nextCard: null,
    bgImage: null,
    popNext: false,
  },

  lifetimes: {
    attached() {
      const { index, nextIndex, cards } = this.data;
      if (cards && cards.length > 0) {
        const currentCard = cards[index];
        let nextCard = null;
        if (cards.length > index + 1) nextCard = cards[index + 1];
        this.setData({
          currentCard,
          nextCard,
          bgImage: currentCard.imageSrc,
        });
      }

      // test
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#888',
      });
    },
  },

  methods: {
    onSwipeOut() {
      // console.log('onSwipeOut');
      let { index, nextIndex, cards } = this.data;
      if (index === cards.length - 1) {
        index = 0;
        nextIndex = 1;
      } else {
        index += 1;
        if (index === cards.length - 1) {
          nextIndex = 0;
        } else {
          nextIndex = index + 1;
        }
      }
      this.setData({
        currentCard: null,
        bgImage: cards[index].imageSrc,
        index,
        nextIndex,
        popNext: true
      });
    },

    onNextCardTransitionEnd() {
      console.log('onNextCardTransitionEnd');
      let { index, nextIndex, cards } = this.data;
      // test
      this.setData({
        currentCard: cards[index],
        nextCard: cards[nextIndex],
        popNext: false,
      });
    }
  }
})
