import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import movieDetails from "./components/moviedetails.vue";
import allMovies from "./components/allmovies.vue";
import errorComponent from "./components/error.vue";
const routes = [
  {
    path: "/",
    component: allMovies,
    alias: "/movies",
  },

  {
    path: "/movies/:id",
    component: movieDetails,
  },

  {
    path: "/:NotFound(.*)*",
    component: errorComponent,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
