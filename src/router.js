import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  // {
  //   path: '/list',
  //   name: 'list',
  //   component: () => import(/* webpackChunkName: 'list' */ './components/CountriesList.vue'),
  //   children: [
  //     {
  //       path: '/details',
  //       name: 'details',
  //       component: () => import(/* webpackChunkName: 'details' */ './components/CountriesDetails.vue')
  //     },
  //   ]
  // }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
