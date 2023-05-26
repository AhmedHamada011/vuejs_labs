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
    <tr v-for="movie in movies" :key="movie.id">
      <th>{{ movie.id }}</th>
      <td>{{ movie.title }}</td>
      <td>{{ movie.category }}</td>
      <td>{{ movie.rate }}</td>
      <td>
        <router-link class="btn btn-info me-1" :to="`/movies/${movie.id}`">show</router-link>
        <router-link class="btn btn-secondary me-1" :to="`/movies/${movie.id}/update`">update</router-link>
        <a class="btn btn-danger" to="/movies/add" @click="deleteMovie(movie.id)">delete</a>
      </td>
    </tr>

  </tbody>
</table>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'allMovies',
    data(){
      return {
        movies:[]
      }
    },
    created(){
        this.getAllmovies()
      },
    methods:{
      getAllmovies(){
        axios.get("http://localhost:3000/movies")
        .then((movies) =>{
          console.log(movies.data);
          this.movies = movies.data;
        })
      },
      deleteMovie(id){
        axios.delete(`http://localhost:3000/movies/${id}`)
        .then(() => {
            this.getAllmovies()
        }).catch((error) => console.log(error))
      }
    }
  }
</script>

<style scoped>

</style>