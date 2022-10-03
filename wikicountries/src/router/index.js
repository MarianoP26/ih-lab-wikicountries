import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/details/:alpha3code',
      name: 'details',
      component: () => import('../components/VueCountriesDetails.vue'),
    }
  ]
});

export default router;
