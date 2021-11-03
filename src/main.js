import Vue from 'vue';
import App from './App.vue';
import 'boxicons';

import store from 'vue-currency-exchange-ninjaonbreak/src/store';
// import store from './store';

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
