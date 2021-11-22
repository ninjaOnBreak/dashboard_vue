<script>
import eventBus from '../eventBus';

export default {
  mounted() {
    console.log('mounted RandomJoke');
    eventBus.$on('clicked', () => {
      console.log('działa?');
    });
  },
  // beforeDestroy() {
  //   eventBus.$off('clicked');
  // },
  //   name: 'get-random-joke',
  //   data() {
  //     return {
  //       randomJoke: '',
  //     };
  //   },

  //   methods: {
  //     sendJoke() {
  //       eventBus.$emit('getJoke');
  //       console.log('joke sent!');
  //     },
  //     async createJoke() {
  //       const response = await fetch(
  //         'https://uselessfacts.jsph.pl/random.json?language=en'
  //       ).then((response) => response.json());
  //       this.randomJoke = response.text;
  //       console.log(this.randomJoke);
  //       // this.sendJoke();
  //     },
  //   },
};
</script>
