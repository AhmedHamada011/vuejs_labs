<template>
  <div class="mb-3">
    <input type="submit" class="btn" :class="darkFlag ? 'btn-primary' : 'btn-secondary'" value="users" @click="flag = !flag">
  </div>

  <div class="mb-3" v-if="flag">
    <table class="table">
      <thead>
        <tr>
          <td>name</td>
          <td>age</td>
          <td>actions</td>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.name">
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button class="btn btn-danger" @click="$emit('delete',user)">delete</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
export default {

  props:['users','darkFlag'],
  inject:['darkFlag'],
  data(){
    return {
      flag:false
    }
  }


}
</script>

<style scoped>

</style>