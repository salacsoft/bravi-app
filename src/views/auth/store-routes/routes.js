import Auth from "@/views/auth/index.vue"
const AuthRoutes = [
   {
      path: "/",
      name: "Auth",
      component: Auth,
      children: [{
         path: "/login",
         name: "Login",
         component: () => import(/* webpackChunkName: "auth-forgot" */ "@/views/auth/login.vue"),
      }, {
         path: "/forgot-password",
         name: "ForgotPassword",
         component: () => import(/* webpackChunkName: "auth-forgot" */ "@/views/auth/forgot-password.vue"),
      }, {
         path: "/reset-password",
         name: "ResetPassword",
         component: () => import(/* webpackChunkName: "auth-reset" */ "@/views/auth/reset-password.vue"),
      }]
   },
]

export default AuthRoutes;