import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /*  {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../components/Contador.vue'),
    },

    {
      path: '/Lista',
      name: 'Lista',
      component: () => import('../components/Lista.vue'),
    },
  ],
})

export default router
