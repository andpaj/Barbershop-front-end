
<template>
<div class="services">
  <div class="greeting">
    <h1>Pricelist</h1>
  </div>
  <div class="services_list" v-if="Object.keys(services).length !== 0">
    <div id="list__of__serveces">
      <div role="tablist" >
        <b-card  id="list-accordion" no-body class="mb-1">

          <div v-for="(service, index) in services" :key="index">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle="'accordion-' +index" variant="light" class="text-left">
                <span class="when-opened float-right">
                  <i class="fas fa-caret-down"></i>
                </span>
                <span class="when-closed float-right">
                    <i class="fas fa-caret-left"></i>
                </span>

                <em class="service-name text--sans">{{ service.serviceName }} - {{ service.price }} euro</em>
              </b-btn>
            </b-card-header>

          </div>
        </b-card>
      </div>
    </div>

  </div>
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



</style>