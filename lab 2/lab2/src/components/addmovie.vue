<template>
  <div class="container">

    <h1>add movie</h1>
    <form action="" @submit.prevent="addMovie()">
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
        <input type="submit" class="btn btn-primary" value="add movie">
      </div>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
  export default {
    name:'addMovie',
    data(){
      return {
        movie:{
          title:"",
          category:"",
          rate:""
        }
      }
    },
    methods:{
      addMovie(){
        axios.post("http://localhost:3000/movies",this.movie)
        .then(()=>{
          this.$router.push("/")
        })
      }
    }
  }
</script>

<style scoped>

</style>