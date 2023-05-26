<template>
  <div :class="darkFlag ? 'bg-secondary' : ''" class="vh-100">
    <div class="container pt-5" >
      <input type="button" class="btn btn-primary" 
      @click="darkFlag = !darkFlag " 
      :value="darkFlag ? 'light mode' : 'dark mode'">

    <div class="row">
      <div class="col form">
        <form-component @send="handleusers"/>
      </div>
      <div class="col admin">
        <admin-component :admins="getAdmins" :darkFlag="darkFlag" @delete="deleteAdmin"/>
      </div>
      <div class="col user">
        <user-component :users="getUsers" :darkFlag="darkFlag" @delete="deleteUser"/>
      </div>
    </div>

  </div>  

  </div>
</template>

<script>
import formComponent from './components/formComponent.vue'
import adminComponent from './components/adminComponent.vue'
import userComponent from './components/userComponent.vue'

export default {
  name: 'App',
  components: {
    formComponent,
    adminComponent,
    userComponent
  },

  data(){
    return {
      users:[],
      darkFlag:true
    }
  },
  methods:{
    handleusers(data){
      this.users.push(JSON.parse(JSON.stringify(data)));
      
    },
    deleteAdmin(admin){
      this.users = this.users.filter(function(item) {
          return item.name !== admin.name
      });
    },

    deleteUser(user){
      this.users = this.users.filter(function(item) {
          return item.name !== user.name
      });
    }

    
  },
  computed:{
    getAdmins(){
      return this.users.filter((user)=>user.role === "admin")
    },


    getUsers(){
      return this.users.filter((user)=>user.role === "user")
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
