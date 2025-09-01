import { createRouter, createWebHistory } from "vue-router";

const LoginPage = () => import("@/views/loginPage.vue");
const HomePage = () => import("@/views/homePage.vue");

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (to.name === "Login" && isAuthenticated) {
    next("/home");
  } else {
    document.title = to.meta.title
      ? `${to.meta.title} - Minha App`
      : "Minha App";
    next();
  }
});

export default router;
