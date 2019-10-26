<template>
  <div class="services">
    <div class="greeting">
      <h1>List of services</h1>
    </div>
    <div class="services_list" v-if="Object.keys(main_services).length !== 0">
      <div id="list__of__serveces">
        <div role="tablist" >
          <b-card  id="list-accordion" no-body class="mb-1">

            <div v-for="(service, index) in main_services" :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-btn block href="#" v-b-toggle="'accordion-' +index" variant="light" class="text-left">
                <span class="when-opened float-right">
                  <i class="fas fa-caret-down"></i>
                </span>
                  <span class="when-closed float-right">
                    <i class="fas fa-caret-left"></i>
                </span>

                  <em class="service-name text--sans">{{service}} </em>
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

      main_services: ["JUUKSELÕIKUS", "HABEMEAJAMINE", "HABEME JA VUNTSIDE KUJUNDAMINE"],
    }
  }
}

    /**,
  methods: {

    //Тут идет запрос в базу и получение данных и запись в массив
    getPersons: function () {
      axios.get('/api/curators')
              .then((response) => {
              })
              .catch((error) => {

              })
    }
  },

  created () {

    this.services = this.$store.getters.getCurators
    this.$store.dispatch('fetchCurators')
            .then((data) => {
              this.services = data
            })
            .catch(err => {

            })
  }

}
 */
</script>

<style>



</style>