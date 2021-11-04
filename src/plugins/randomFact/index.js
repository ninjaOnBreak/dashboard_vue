import randomFact from './randomFact';

export default {
  install: function (Vue) {
    Vue.component('randomFact', randomFact);
  },
};
