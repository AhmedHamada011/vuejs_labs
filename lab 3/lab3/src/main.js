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

// custom directive

const app = createApp(App);

app.directive("theme", {
  mounted(elem, binding) {
    if (binding.value === "primary") {
      elem.style.backgroundColor = "blue";
    } else if (binding.value === "warning") {
      elem.style.backgroundColor = "yellow";
    } else {
      elem.style.backgroundColor = "gray";
    }
  },
});
app.use(router).mount("#app");
