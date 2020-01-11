
<template>
<div class="services">
  <div class="row justify-content-center">
      <div class="col-12">
        <div class="bg-img-container">
          <div class="bg-img">
            <div class="bg-header-container">
              <h1>Services</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-row class="row justify-content-center">
      <b-col cols="12" md="8" class="content-container">
        <div class="header-container">
          <h2> Our Services</h2>
        </div>
        <b-alert show variant="info" class="alert-container">We offer -20% discount for pensioners,students and childs</b-alert>
        <b-card class="edit-tabs-container">
          <b-card-title>Pricelist</b-card-title>
          <b-card-sub-title class="mb-2">Juukselõikus sis. pesu</b-card-sub-title>
          <b-list-group flush class="services-list">
            <b-list-group-item v-for="(service, index) in services" :key="index">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" :value="service.serviceName">{{ service.serviceName }}</h5>
                <h5 class="price-font">{{ service.price }} EUR.</h5>
              </div>
            </b-list-group-item>
            <hr>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
</div>
</template>

<script>
  export default {
    name: 'services_list',
    data() {
      return {
        services: [],
      }
    },
      methods: {
          loadServices() {
              this.axios.get('/services/findall').then((response) => {
                this.$data.services = response.data;
              })
          }
      },
      mounted() {
          this.loadServices();
      }
  }
</script>

<style scoped>

.alert-container {
  margin-top: 10px; 
}

.services-list {
  margin-top: 30px;
}

.price-font {
  margin-left: 15px;
  white-space: nowrap;
}

@media only screen and (max-width: 700px) {

  .alert-container {
    margin-top: 0; 
  }

  .content-container {
    margin: 0 auto;
  }

}  

</style>