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
         meta: {
            isAuthRequired: false,
            title: "Login"
         }
      }, {
         path: "/forgot-password",
         name: "ForgotPassword",
         component: () => import(/* webpackChunkName: "auth-forgot" */ "@/views/auth/forgot-password.vue"),
         meta: {
            isAuthRequired: false,
            title: "Forgot Password"
         }
      }, {
         path: "/reset-password",
         name: "ResetPassword",
         component: () => import(/* webpackChunkName: "auth-reset" */ "@/views/auth/reset-password.vue"),
         meta: {
            isAuthRequired: false,
            title: "Reset Password"
         }
      }],
      meta: {
         isAuthRequired: true,
      },
      redirect: { name: 'Main' }
   },
]

export default AuthRoutes;