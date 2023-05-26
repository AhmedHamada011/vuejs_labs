import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import addMovie from "./components/addmovie.vue";
import movieDetails from "./components/moviedetails.vue";
import updateMovie from "./components/updatemovie.vue";
import allMovies from "./components/allmovies.vue";
import errorComponent from "./components/error.vue";
const routes = [
  {
    path: "/",
    component: allMovies,
    alias: "/movies",
  },

  {
    path: "/movies/add",
    component: addMovie,
  },

  {
    path: "/movies/:id",
    component: movieDetails,
  },

  {
    path: "/movies/:id/update",
    component: updateMovie,
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
