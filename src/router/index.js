import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "@/pages/Home.vue";

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage
  },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router