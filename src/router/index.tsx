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
			path: "/breadcrumbs",
			name: "breadcrumbs",
			component: () => import("../views/BreadcrumbsView.vue"),
		},
	],
});

export default router;
