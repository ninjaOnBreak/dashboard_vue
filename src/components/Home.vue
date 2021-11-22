<template>
  <div class="ninja-bgc" @click="imageClick"></div>
</template>

<script>
import eventBus from '../eventBus';

export default {
  methods: {
    imageClick() {
      eventBus.$emit('clickedImage');
    },
  },

  mounted() {
    eventBus.$on('clicked', () => {
      console.log('EventBus działa');
    });
  },
  beforeDestroy() {
    eventBus.$off('clicked');
  },
};
</script>

<style lang="scss" scoped>
.ninja-bgc {
  height: 95vh;
  background-image: url('../assets/ninja_img_text.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
