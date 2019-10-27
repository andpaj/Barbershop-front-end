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
          registration_list: []

        }
    },    
    methods: {
        loadReserv() {
          this.axios.get('reservation/get').then((response) => {
            console.log(response.data)
            this.$data.registration_list = response.data;
        })
      }
    },
    mounted() {
        this.loadReserv();
    }
}

</script>

<style>

  .table{
    padding-top: 50px;
  }

</style>