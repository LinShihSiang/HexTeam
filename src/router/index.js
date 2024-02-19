import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../views/ProductListView.vue')
  },
  {
    path: '/KnowledgeList',
    name: 'KnowledgeList',
    component: () => import('../views/KnowledgeListView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
