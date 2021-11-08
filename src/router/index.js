import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('vue-calculator-ninjaonbreak/src/App.vue'),
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: () => import('vue-todo-ninjaonbreak/src/App.vue'),
  },
  {
    path: '/currency',
    name: 'CurrencyExchange',
    component: () => import('vue-currency-exchange-ninjaonbreak/src/App.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
