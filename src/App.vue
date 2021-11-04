<template>
  <div id="app">
    <header>
      <div class="logo" @click="activeComponent = ''">ninjaOnBreak</div>
      <div class="button-random" @click="randomModal = !randomModal">
        Click for random
      </div>
      <div v-if="randomModal === true" class="modal-random">
        <randomFact />
      </div>
    </header>
    <section>
      <nav class="menu-left">
        <ul class="menu-left__list">
          <li
            class="menu-left__list--item"
            @click="selectComponent('CalculatorVue')"
          >
            <div>
              <span>CalculatorVue</span>
              <span class="app-desc">Simple math in Vue</span
              ><box-icon name="calculator" color="#ffffff"></box-icon>
              <span class="app-desc"
                ><a
                  href="https://github.com/ninjaOnBreak/calculator_vue"
                  target="_blank"
                  class="github-link"
                  >Check it on Github</a
                ></span
              >
            </div>
          </li>
          <li class="menu-left__list--item" @click="selectComponent('ToDoVue')">
            <div>
              <span>ToDoVue</span>
              <span class="app-desc">Classic ToDo in Vue</span
              ><box-icon name="calendar" color="#ffffff"></box-icon>
              <span class="app-desc"
                ><a
                  href="https://github.com/ninjaOnBreak/todo_vue_first"
                  target="_blank"
                  class="github-link"
                  >Check it on Github</a
                ></span
              >
            </div>
          </li>
          <li
            class="menu-left__list--item"
            @click="selectComponent('CurrencyExchangeVue')"
          >
            <div>
              <span>CurrencyExchange</span>
              <span class="app-desc">Axios, API and Vuex</span
              ><box-icon name="dollar-circle" color="#ffffff"></box-icon>
              <span class="app-desc"
                ><a
                  href="https://github.com/ninjaOnBreak/exchange_vue"
                  target="_blank"
                  class="github-link"
                  >Check it on Github</a
                ></span
              >
            </div>
          </li>
          <li
            class="menu-left__list--item"
            @click="selectComponent('CurrencyExchangeVue')"
          >
            <div>
              <span>CV Generator</span>
              <span class="app-desc">Vuetify / validation</span
              ><box-icon name="file" color="#ffffff"></box-icon>
              <span class="app-desc"
                ><a href="#" target="_blank" class="github-link"
                  >Coming soon!</a
                ></span
              >
            </div>
          </li>
          <li
            class="menu-left__list--item"
            @click="selectComponent('CurrencyExchangeVue')"
          >
            <div>
              <span>TicTacToe</span>
              <span class="app-desc">Coming soon!</span
              ><box-icon name="grid" type="solid" color="#ffffff"></box-icon>
            </div>
          </li>
        </ul>
      </nav>
      <main>
        <component :is="activeComponent"></component>
        <div v-if="activeComponent === ''" class="ninja-bgc"></div>
      </main>
    </section>
  </div>
</template>

<script>
import CalculatorVue from 'vue-calculator-ninjaonbreak/src/App.vue';
import ToDoVue from 'vue-todo-ninjaonbreak/src/App.vue';
import CurrencyExchangeVue from 'vue-currency-exchange-ninjaonbreak/src/App.vue';

export default {
  components: {
    CalculatorVue,
    ToDoVue,
    CurrencyExchangeVue,
  },

  data() {
    return {
      activeComponent: '',
      randomModal: false,
    };
  },

  methods: {
    selectComponent(value) {
      console.log(value);
      this.activeComponent = value;
    },
  },
};
</script>

<style lang="scss">
:root {
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
  --font: Roboto, sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f7f6f1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: #374961;
    color: white;
    padding: 10px;

    .logo,
    .button-random {
      cursor: pointer;
    }

    .modal-random {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 30vw;
      padding: 20px;
      background-color: #374961;
      border-radius: 7px;
    }
  }

  section {
    display: flex;
    width: 100%;
    height: 100%;

    .menu-left {
      background-color: #374961;

      .menu-left__list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        height: 90vh;

        .menu-left__list--item {
          position: relative;
          height: 100px;
          // width: 150px;
          margin: 10px 0;
          cursor: pointer;
        }

        .menu-left__list--item div {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          position: absolute;
          top: 0;
          left: -170px;
          width: 220px;
          height: 100px;
          padding: 0 10px;
          // line-height: 100px;
          color: white;
          background-color: #374961;
          border-radius: 15px;
          transition: 0.3s;

          span {
            margin: 0 25px;
            padding-right: 25px;

            a {
              color: white;
              text-decoration: none;
            }

            .github-link:hover {
              color: rgb(199, 199, 199);
            }
          }

          .app-desc {
            font-size: 12px;
          }

          box-icon {
            position: absolute;
            top: 38px;
            right: 10px;
          }
        }

        .menu-left__list--item:hover div {
          left: -10px;
        }

        .show {
          left: -10px;
        }
      }
    }

    main {
      width: 90%;
      flex-grow: 1;

      .ninja-bgc {
        height: 100%;
        background-image: url('./assets/ninja_img_text.jpg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
