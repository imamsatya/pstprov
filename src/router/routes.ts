import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/SLayout.vue'),
    children: [{ path: '', component: () => import('pages/Rating.vue') }]
  },
  {
    path: '/report',
    component: () => import('layouts/SLayout.vue'),
    children: [{ path: '', component: () => import('pages/Report.vue') }]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/SLayout.vue'),
    children: [{ path: '', component: () => import('pages/Dashboard.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
