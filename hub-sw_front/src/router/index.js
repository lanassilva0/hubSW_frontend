import Vue from "vue";
import Router from "vue-router";

const LoginPage = () => import("@/views/loginPage.vue");
const HomePage = () => import("@/views/homePage.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
      meta: {
        allowAnonymous: true,
      },
    },
    {
      path: "/home",
      name: "Home",
      component: HomePage,
      meta: {
        breadcrumb: [{ name: "dashboard" }],
      },
    },
  ],
});
