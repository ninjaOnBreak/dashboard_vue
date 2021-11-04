<template>
  <div>
    <div>This is true:</div>
    <div>{{ randomFact }}</div>
  </div>
</template>

<script>
export default {
  name: 'get-random-fact',
  data() {
    return {
      randomFact: '',
    };
  },
  async created() {
    const response = await fetch(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    ).then((response) => response.json());
    this.randomFact = response.text;
  },
};
</script>
