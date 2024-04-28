import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import TimeGame from '../views/TimeGameView.vue';
import Search from '../views/SearchView.vue';
import FactorialSetup from '../views/FactorialSetup.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/timegame',
    name: 'TimeView',
    component: TimeGame,
  },
  {
    path: '/search',
    name: 'SearchView',
    component: Search,
  },
  {
    path: '/factorialSetup',
    name: 'FactorialSetup',
    component: FactorialSetup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;