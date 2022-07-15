import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

const baseRouterMap: RouteRecordRaw[] = [
  {
    path: '/page1',
    component: () => import('../page/page1.vue'),
  },
  {
    path: '/page2',
    component: () => import('../page/page2.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: baseRouterMap,
})

export const setupRouter = (app: App) => {
  app.use(router)
}

export default router
