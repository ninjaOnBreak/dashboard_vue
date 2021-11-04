import Vue from 'vue';
import GetRandomText from './randomText.vue';
// console.log(GetRandomText);

let randomTextPlugin = {};

randomTextPlugin.install = function (Vue, options) {
  Vue.component(GetRandomText);
  //   Vue.prototype.$randomText = function () {
  //     console.log($randomText);
  //   };
};
console.log(randomTextPlugin);
export default randomTextPlugin;

// const getRandomText = {
//   install(Vue, options) {
//     Vue.component(GetRandomText);
//   },
// };

// export default getRandomText;
