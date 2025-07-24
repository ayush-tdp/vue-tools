const app = Vue.createApp({
  data() {
    return {
      hands: [
        'assets/hand1.jpg',
        'assets/hand2.jpg',
        'assets/hand3.jpg',
      ],
      currentIndex: 0,
      carat: 1.0,
      minCarat: 0.5,
      maxCarat: 5.0,
    };
  },
  computed: {
    currentHand() {
      return this.hands[this.currentIndex];
    },
    diamondSize() {
      const mm = this.getDiamondMM(this.carat);
      const pxPerMM = 5; // adjust based on image resolution
      return mm * pxPerMM;
    },
  },
  methods: {
    getDiamondMM(carat) {
      // Approximate mapping for round brilliant
      if (carat <= 0.5) return 5.2;
      if (carat <= 1.0) return 6.5;
      if (carat <= 1.5) return 7.4;
      if (carat <= 2.0) return 8.2;
      if (carat <= 3.0) return 9.4;
      return 11.1; // max ~5ct
    }
  }
});
app.mount('#app');
