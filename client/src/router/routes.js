
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/posts', component: () => import('pages/blog/PostIndex.vue') },
      { path: '/posts/:year/:month/:day/:title', component: () => import('pages/blog/PostShow.vue') },
      { path: '/resources', component: () => import('pages/resources/ResourceIndex.vue') },
      { path: '/resources/:resource', component: () => import('pages/resources/ResourceShow.vue') }
    ]
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
