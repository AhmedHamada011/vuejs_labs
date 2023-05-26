<template>
  <h1>update movie</h1>
    <form action="" @submit.prevent="updateMovie()">
      <div class="mb-3">
        <label class="form-label">title</label>
        <input type="text" class="form-control" v-model.trim="movie.title">
      </div>

      <div class="mb-3">
        <label class="form-label">category</label>
        <input type="text" class="form-control" v-model.trim="movie.category">
      </div>
      
      <div class="mb-3">
        <label class="form-label">rate</label>
        <input type="number" class="form-control" v-model.trim="movie.rate">
      </div>

      <div class="mb-3">
        <input type="submit" class="btn btn-primary" value="update movie">
      </div>
    </form>
</template>

<script>
import axios from 'axios'
  export default {
    name:'updateMovie',
    data(){
      return {
        movie:{
          id:"",
          title:"",
          category:"",
          rate:""
        }
      }
    },
    created(){
      this.getMovieById()
    },
    methods:{
      updateMovie(){
        let id = this.$route.params.id;
        axios.put(`http://localhost:3000/movies/${id}`,this.movie)
        .then(()=>{
          this.$router.push("/")
        })
      },

      getMovieById(){
        this.movie.id = this.$route.params.id;
        axios.get(`http://localhost:3000/movies/${this.movie.id}`)
        .then((movie) => {
          this.movie = movie.data
          console.log(this.movie);
        })
      },

    }

  }
</script>

<style scoped>

</style>