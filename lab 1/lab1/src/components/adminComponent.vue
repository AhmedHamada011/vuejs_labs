<template>
  <div class="mb-3">
    <input type="submit" class="btn" :class="darkFlag ? 'btn-primary' : 'btn-secondary'" value="admins" @click="flag = !flag">
  </div>

  <div class="mb-3" v-if="flag">
    <table class="table">
      <thead>
        <tr>
          <td>name</td>
          <td>age</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody v-for="admin in admins" :key="admin.name">
        <tr>
          <td>{{ admin.name }}</td>
          <td>{{ admin.age }}</td>
          <td>
            <button class="btn btn-danger" @click="$emit('delete',admin)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:['admins','darkFlag'],
  inject:['darkFlag'],
  data(){
    return {
      flag:false,
    }
  }

}
</script>

<style scoped>

</style>