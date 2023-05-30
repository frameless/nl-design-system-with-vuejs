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
      path: "/rvoprofiel",
      name: "rvoprofiel",
      component: () => import("../views/RvoProfielView.vue"),
    },
    {
      path: "/rvozaakview",
      name: "rvozaakview",
      component: () => import("../views/RvoZaakView.vue"),
    },
    {
      path: "/rvomijnzaken",
      name: "rvomijnzaken",
      component: () => import("../views/RvoMijnZakenView.vue"),
    },
    {
      path: "/rvoinloggen",
      name: "rvoinloggen",
      component: () => import("../views/RvoInloggenView.vue"),
    },
    {
      path: "/rvodiensten",
      name: "rvodiensten",
      component: () => import("../views/RvoDienstenView.vue"),
    },
    {
      path: "/jvbevestiging",
      name: "jvbevestiging",
      component: () => import("../views/JVBevestigingView.vue"),
    },
    {
      path: "/jvbijlagen",
      name: "jvbijlagen",
      component: () => import("../views/JVBijlagenView.vue"),
    },
    {
      path: "/jvcontroleergegevens",
      name: "jvcontroleergegevens",
      component: () => import("../views/JVControleerGegevensView.vue"),
    },
    {
      path: "/jvcorrespondentie",
      name: "jvcorrespondentie",
      component: () => import("../views/JVCorrespondentieView.vue"),
    },
    {
      path: "/jvdatum",
      name: "jvdatum",
      component: () => import("../views/JVDatumView.vue"),
    },
    {
      path: "/jvkosten",
      name: "jvkosten",
      component: () => import("../views/JVKostenView.vue"),
    },
    {
      path: "/jvkostenopvoeren",
      name: "jvkostenopvoeren",
      component: () => import("../views/JVKostenOpvoerenView.vue"),
    },
    {
      path: "/jvondertekening",
      name: "jvondertekening",
      component: () => import("../views/JVOndertekeningView.vue"),
    },
    {
      path: "/jvproject",
      name: "jvproject",
      component: () => import("../views/JVProjectView.vue"),
    },
    {
      path: "/jvsamenvatting",
      name: "jvsamenvatting",
      component: () => import("../views/JVSamenvattingView.vue"),
    },
    {
      path: "/nieuwerijkshuisstijl",
      name: "nieuwerijkshuisstijl",
      component: () => import("../views/NieuweRijkshuisstijlView.vue"),
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
    {
      path: "/filterAdvise",
      name: "filterAdvise",
      component: () => import("../views/FilterAdviseView.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/FormView.vue"),
    },
    {
      path: "/hero",
      name: "hero",
      component: () => import("../views/HeroView.vue"),
    },
    {
      path: "/logoGrid",
      name: "logoGrid",
      component: () => import("../views/LogoGridView.vue"),
    },
    {
      path: "/searchMenu",
      name: "searchMenu",
      component: () => import("../views/SearchMenuView.vue"),
    },
    {
      path: "/subMenu",
      name: "subhMenu",
      component: () => import("../views/SubMenuView.vue"),
    },
    {
      path: "/subMenuGrid",
      name: "subhMenuGrid",
      component: () => import("../views/SubMenuGridView.vue"),
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/windowAcord",
      name: "windowAcord",
      component: () => import("../views/WindowAcordView.vue"),
    },
  ],
});

export default router;
