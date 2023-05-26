<template>
  <h1>All movies</h1>
  <router-link class="btn btn-primary ms-4" to="/movies/add">create movie</router-link>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">category</th>
      <th scope="col">rate</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="movie in movies.value" :key="movie.id">
      <th>{{ movie.id }}</th>
      <td>{{ movie.title }}</td>
      <td>{{ movie.category }}</td>
      <td>{{ movie.rate }}</td>
      <td>
        <router-link class="btn btn-info me-1" :to="`/movies/${movie.id}`">show</router-link>
      </td>
    </tr>

  </tbody>
</table>
</template>

<script>
  import axios from 'axios'
  import {reactive} from 'vue'
  export default {
    name:'allMovies',

    setup(){
      let movies = reactive([]);

      let getAllmovies = function(){
        axios.get("http://localhost:3000/movies")
        .then((res) =>{
          // console.log(res.data);
          movies.value = res.data;
        })
      }
      getAllmovies();

      console.log(movies.value);

      return {
        movies,
      }
    },



  }
</script>

<style scoped>

</style>