import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'boxicons';

import store from 'vue-currency_exchange-ninjaonbreak/src/store';
// store.registerModule('CurrencyModule');

Vue.use(VueAxios, axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
