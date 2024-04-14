import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/SearchView.vue';
import Factorial from '../views/FactorialView.vue';
import FactorialSetup from '../views/FactorialSetup.vue';

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: Search,
  },
  {
    path: '/factorial',
    name: 'FactorialView',
    component: Factorial,
  },
  {
    path: '/factorialSetup',
    name: 'FactorialSetup',
    component: FactorialSetup,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
