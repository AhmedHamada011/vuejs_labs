<template>
  <h2>add new user</h2>
  <form action="" @submit.prevent="formHandling">
  <div class="mb-3"  style="text-align: left">
    <label for="name" class="form-label">name</label>
    <input type="text" class="form-control" id="name" v-model.trim="formValues.name">
  </div>
  <div class="mb-3"  style="text-align: left">
    <label for="age" class="form-label">age</label>
    <input type="number" class="form-control" id="age" v-model.trim.number="formValues.age">
  </div>

  <div class="mb-3" style="text-align: left">
    <label for="name" class="form-label">role</label>
    <select  class="form-control" id="name" v-model.trim="formValues.role">
      <option value="user">user</option>
      <option value="admin">admin</option>
    </select>
  </div>
  <div class="mb-3">
    <input type="submit" class="btn btn-primary" @click="$emit('send',formValues)">
  </div>
</form>

</template>

<script>
  export default {
    emits:['send'],

    data(){
    return {
      users :[],
      formValues:{
        name:'',
        age:'',
        role:''
      }
    }
  },
  methods:{
    formHandling(){
    }
  }
  }
</script>

<style scoped>

</style>