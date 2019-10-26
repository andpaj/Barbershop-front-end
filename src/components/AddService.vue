<template>
  <div class="about">

    <div calss="app">


      <div class = "table">
        <b-table striped hover :items="services"></b-table>
      </div>
      <hr>
      <form v-on:submit.prevent="addNewUser">
        <input v-model="service.name" />
        <input v-model="service.price" />
        <button type="submit">Add Service</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      services:[{name:"Cut", price:20 + "EUR"}],
      service: {name: "", price: 0 + "EUR"}
    }
  },
  methods:{
    addNewUser() {
      this.services.push({ name: this.service.name, price: this.service.price })
    }
  }
}
</script>

<style>

</style>