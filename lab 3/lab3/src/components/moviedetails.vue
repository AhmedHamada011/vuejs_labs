<template>
  <h1>movie details</h1>

  <div class="card" style="width: 25rem;margin:auto">
  <div class="card-body" v-if="movie.value">
    <h5 class="card-title">{{ movie.value.title }}</h5>
    <p class="card-text">category of movie is: {{ movie.value.category }}.</p>
    <p class="card-text">rate of movie is: {{ movie.value.rate }}</p>
    <a href="#" class="btn btn-primary" @click="back">back to home</a>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  import {reactive} from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name:'movieDetails',

    setup(){

    let movie = reactive({});
    const route = useRoute();

    let getMovieById = function(){
        let id  = route.params.id;
        axios.get(`http://localhost:3000/movies/${id}`)
        .then((res) => {
          movie.value = res.data
        })
      }
      getMovieById();

      return {
        movie
      }
      


    }


    // data(){
    //   return {
    //     movie:{
    //       id:'',
    //       title:'',
    //       category:'',
    //       rate:'',
    //     }
    //   }
    // },
    // created(){
    //   this.getMovieById()
    // },

    // methods:{
    //   getMovieById(){
    //     this.movie.id = this.$route.params.id;
    //     axios.get(`http://localhost:3000/movies/${this.movie.id}`)
    //     .then((movie) => {
    //       this.movie = movie.data
    //       console.log(this.movie);
    //     })
    //   },
    //   back(){
    //     this.$router.push("/")
    //   }
    // }
  }
</script>

<style scoped>

</style>