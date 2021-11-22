import Vue from 'vue';
import Vuex from 'vuex';

import storeExchange from 'vue-currency-exchange-ninjaonbreak/src/store';
// import storeCVGenerator from 'vue-cv-from-forms-ninjaonbreak/src/store';

Vue.use(Vuex);

export default new Vuex.Store({
  storeExchange,
  //   storeCVGenerator,
});
