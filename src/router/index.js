import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "@/views/auth/store-routes/routes";
import store from '@/store';

const rootTitle = "BRAVI";

const routes = [
  ...AuthRoutes,
  {
    path: "/main",
    name: "Main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main-index" */ "@/views/main/index.vue"),
    children: [{
      path: "",
      name: "dashboard-index",
      component: () => import(/* webpackChunkName: "main-dashboard-index" */ "@/views/main/dashboard/index.vue"),
      meta: {
        title: `${rootTitle} - Dashboard`,
        isAuthRequired: true
      }
    }, {
      path: "dashboard",
      name: "dashboard-stats",
      component: () => import(/* webpackChunkName: "main-dashboard-stats" */ "@/views/main/dashboard/statistic.vue"),
    }]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.isLoggedIn
  // const user = store.getters.getUserDetails;
  if (to.name !== 'Login' && to.name !== 'ResetPassword' && to.name !== 'ForgotPassword' && !isAuthenticated) next({ name: 'Login' })
  else {
    if (to.name == 'Login' && isAuthenticated) next({ name: 'Main' })
    else next()
  }
});

export default router
