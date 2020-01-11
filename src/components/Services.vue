<template>
  <div class="services">
    <div class="greeting">
      <h1>List of services</h1>
    </div>
    <div class="services_list" v-if="Object.keys(services).length !== 0">
      <div id="list__of__serveces">
        <b-list-group class="text-left">
          <b-list-group-item v-for="(service, index) in services" :key="index">{{ service.serviceName }}
            <b-badge class="float-right"  pill>~{{ service.duration }} min.</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services_list',
  data() {
    return {
      services: []
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

<style>



</style>