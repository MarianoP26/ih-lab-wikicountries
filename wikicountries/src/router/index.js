import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import(/* webpackChunkName: 'index' */ '../views/Home.vue'),
    },
    {
      path: '/details/:alpha3code',
      name: 'details',
      component: () => import(/* webpackChunkName: 'list' */ '../components/VueCountriesDetails.vue'),
    }
  ]
});

export default router;
