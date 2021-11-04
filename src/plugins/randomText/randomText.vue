<template>
  <div>
    <div>This is true:</div>
    <div>{{ randomText }}</div>
  </div>
</template>

<script>
export default {
  name: 'get-random-text',
  data() {
    return {
      randomText: '',
    };
  },
  async created() {
    const response = await fetch(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    ).then((response) => response.json());
    this.randomText = response.text;
  },
};
</script>
