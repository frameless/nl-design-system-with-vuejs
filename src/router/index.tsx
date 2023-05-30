import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/accordion",
      name: "accordion",
      component: () => import("../views/AccordionView.vue"),
    },
    {
      path: "/alert",
      name: "alert",
      component: () => import("../views/AlertView.vue"),
    },
    {
      path: "/content",
      name: "content",
      component: () => import("../views/ContentView.vue"),
    },
    {
      path: "/filterEnergy",
      name: "filterEnergy",
      component: () => import("../views/FilterEnergyView.vue"),
    },
  ],
});

export default router;
