<template>
  <div class="about">

    <div calss="app">

      <h1 class="h1">Here you can add a service</h1>
      <div class = "table">
        <b-table striped hover :items="services">
          <b-list-group class="text-left">
          <b-list-group-item v-for="(service, index) in services" :key="index">{{ service.serviceName }}</b-list-group-item>
        </b-list-group>
        </b-table>
      </div>
      <hr>

      <form v-on:submit.prevent="addNewService" class="form" id="form">
        <div class="form-group">
          <label>Service name</label>
          <input v-model="service.name" type="text" class="form-control" id="name" placeholder="Service name">
        </div>
        <div class="form-group">
          <label>Service Price</label>
          <input v-model="service.price" type="text" class="form-control" id="price" placeholder="Service price">
        </div>
        <div class="form-group">
          <label>Service duration</label>
          <input v-model="service.duration" type="text" class="form-control" id="duration" placeholder="Service duration">
        </div>
        <div class="form-group">
          <button type="submit">Add Service</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
  name: 'add-service',
  data() {
    return {
      services:[],
      service: {name: "", price: "", duration:""}
    }
  },


  methods:{
    addNewService() {
      this.services.push({ name: this.service.name, price: this.service.price + " EUR", duration: this.service.duration + " min"})
    },
    loadServices() {
              this.axios.get('/services/get').then((response) => {
                this.$data.services = response.data;
              })
          }
  },
  mounted() {
          this.loadServices();
      }
}


</script>

<style>
  .h1{
    padding-top: 30px;
  }

  .form{
    width: 600px;
    margin-left: 400px;
    padding-top: 50px;
    border: 2px solid black;
    border-radius: 20px;



  }



</style>