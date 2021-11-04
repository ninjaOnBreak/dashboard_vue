import Vue from 'vue';
import App from './App.vue';
import 'boxicons';
import randomTextPlugin from './plugins/randomText/index.js';

import store from 'vue-currency-exchange-ninjaonbreak/src/store';
// import store from './store';

Vue.use(randomTextPlugin);
console.log(randomTextPlugin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
