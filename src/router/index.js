import { createRouter, createWebHistory } from "vue-router";
import CountryList from "../views/CountryList.vue";
import Services from "../views/Service.vue";
import Options from "../views/Options.vue";

const routes = [
  {
    path: "/",
    name: "CountryList",
    component: CountryList,
  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path: "/Options",
    name: "Options",
    component: Options,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
