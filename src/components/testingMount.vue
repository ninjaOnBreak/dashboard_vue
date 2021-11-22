<script>
import eventBus from '../eventBus';

export default {
  mounted() {
    console.log('testingMount');
    eventBus.$on('clicked', () => {
      console.log('działa?');
    });
  },
};
</script>
