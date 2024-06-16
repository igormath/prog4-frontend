import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: "/:notFound",
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: "/crud",
      name: 'crud',
      component: () => import('../views/CrudView.vue')
    },
    {
      path: "/cadastrar",
      name: 'cadastrar',
      component: () => import('../views/CadastrarView.vue')
    },
    {
      path: "/atualizar",
      name: 'atualizar',
      component: () => import('../views/AtualizarView.vue')
    },
    {
      path: "/remover",
      name: 'remover',
      component: () => import('../views/RemoverView.vue')
    },
  ]
})

export default router