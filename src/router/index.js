import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/thank-you",
      name: "thank-you",
      component: () => import("../views/ThankYouView.vue"),
    },
  ],
});

export default router;
