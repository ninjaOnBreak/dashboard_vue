<template>
  <div id="app">
    <header><div class="logo">ninjaOnBreak</div></header>
    <section>
      <nav class="menu-left">
        <ul class="menu-left__list">
          <li
            class="menu-left__list--item"
            @click="selectComponent('CalculatorVue')"
          >
            CalculatorVue
          </li>
          <li class="menu-left__list--item" @click="selectComponent('ToDoVue')">
            ToDoVue
          </li>
        </ul>
      </nav>
      <main><component :is="activeComponent"></component></main>
    </section>
  </div>
</template>

<script>
import CalculatorVue from 'vue-calculator-ninjaonbreak/src/App.vue';
import ToDoVue from 'vue-todo-ninjaonbreak/src/App.vue';

export default {
  components: {
    CalculatorVue,
    ToDoVue,
  },

  data() {
    return {
      activeComponent: '',
    };
  },

  // computed: {
  //   activeComponent() {
  //     return CalculatorVue;
  //   },
  // },

  methods: {
    selectComponent(value) {
      console.log(value);
      this.activeComponent = value;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    background-color: #374961;
    color: white;
    padding: 10px;

    .logo {
      align-self: flex-start;
    }
  }

  section {
    display: flex;
    width: 100%;
    height: 100%;

    .menu-left {
      width: 15%;

      .menu-left__list {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 25vh;

        .menu-left__list--item {
          height: 10vh;
          width: 90%;
          min-width: 110px;
          line-height: 10vh;
          color: white;
          background-color: #374961;
          border-radius: 5px;
        }
      }
    }

    main {
      flex-grow: 1;
    }
  }
}
</style>
