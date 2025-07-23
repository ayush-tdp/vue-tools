const app = Vue.createApp({
  data() {
    return {
      hands: [
        'assets/hand1.jpg',
        'assets/hand2.jpg',
        'assets/hand3.jpg',
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentHand() {
      return this.hands[this.currentIndex];
    },
  },
});

app.mount('#app');
