import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: 'list' */ './components/CountriesList.vue'),
  },
  {
    path: '/countryCode',
    name: 'CountryDetails',
    component: () => import(/* webpackChunkName: 'details' */ './components/CountryDetails.vue')
  },
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
