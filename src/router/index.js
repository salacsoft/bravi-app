import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "@/views/auth/store-routes/routes";
import store from '@/store';

const rootTitle = process.env.VUE_APP_NAME;


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
      name: "Dashboard",
      component: () => import(/* webpackChunkName: "main-dashboard-index" */ "@/views/main/dashboard/index.vue"),
      meta: {
        title: `${rootTitle} - Dashboard`,
        isAuthRequired: true
      }
    }, {
      path: "dashboard",
      name: "dashboard-stats",
      component: () => import(/* webpackChunkName: "main-dashboard-stats" */ "@/views/main/dashboard/statistic.vue"),
      meta: {
        title: `${rootTitle} - status`,
        isAuthRequired: true
      }
    }],
    meta: {
      title: `${rootTitle}`,
      isAuthRequired: true
    },
    redirect: { name: 'Dashboard' }
  },
  {
    path: "/404",
    name: '404',
    component: () => import(/* webpackChunkName: "not-found-page" */ "@/views/not-found.vue"),
    meta: {
      title: `${rootTitle} - not found`,
      isAuthRequired: false
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: '404' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  let isAuthenticated = store.getters.isLoggedIn
  const requiredAuth = to.meta.isAuthRequired;


  if (requiredAuth) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    }
  }
  document.title = to.meta.title;;
  next();
  // // const user = store.getters.getUserDetails;
  // if (to.name !== 'Login' && to.name !== 'ResetPassword' && to.name !== 'ForgotPassword' && !isAuthenticated) next({ name: 'Login' })
  // else {
  //   if (to.name == 'Login' && isAuthenticated) next({ name: 'Main' })
  //   else next()
  // }
});

export default router
