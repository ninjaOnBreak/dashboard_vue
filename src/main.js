import Vue from 'vue';
import App from './App.vue';
import 'boxicons';
import randomFact from './plugins/randomFact';

import store from 'vue-currency-exchange-ninjaonbreak/src/store';
// import store from './store';

Vue.use(randomFact);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
