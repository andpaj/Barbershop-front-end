<template>
  <div class="admin">
    <h1>Here you can see reservation list</h1>
    <template>
      <div class = "table">
        <b-table striped hover :items="registration_list"></b-table>
      </div>
    </template>



  </div>
</template>

<script>
export default {
    name: 'admin',
    data () {
        return {

          registration_list: [
            { date: "05.09", time: "13:21", service: 'cut', first_name: 'Dickerson', last_name: 'Macdonald', email: "adsad@gmial.com", phone: 434213123 },
            { date: "05.09", time: "13:21", service: 'cut', first_name: 'Dickerson', last_name: 'Macdonald', email: "adsad@gmial.com", phone: 434213123 },
            { date: "05.09", time: "13:21", service: 'cut', first_name: 'Dickerson', last_name: 'Macdonald', email: "adsad@gmial.com", phone: 434213123 },
            { date: "05.09", time: "13:21", service: 'cut', first_name: 'Dickerson', last_name: 'Macdonald', email: "adsad@gmial.com", phone: 434213123 }
          ]}





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

  .table{
    padding-top: 50px;
  }

</style>