import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'
import CountriesDetails from './views/CountriesDetails.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: 'countryDetails',
    component: CountriesDetails,
  },
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
