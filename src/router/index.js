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
      component: () => import('../modules/contador/components/Contador.vue'),
    },

    {
      path: '/Lista',
      name: 'Lista',
      component: () => import('../modules/Lista/components/Lista.vue'),
    },

    {
      path: '/Registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/Registrar.vue'),
    },
  ],
})

export default router
