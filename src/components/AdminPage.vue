<template>
  <div class="admin">
    <div class="row justify-content-center">
        <div class="col-12">
          <div class="bg-img-container">
            <div class="bg-img">
              <div class="bg-header-container">
                <h1>Reservation list</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
    <b-row class="row justify-content-center">
      <b-col cols="12" md="8" class="tabs-class editor-container">
        <div class="header-container">
          <h2>List of all reservations</h2>
        </div>
        <b-alert show variant="info" class="alert-container">
          For deleting:
          <br>
          1. Click on the needed row
          <br>
          2. Submit by clicking button 'Delete'
        </b-alert>
        <template>
          <div class = "table">
            <b-table striped 
              hover 
              responsive="sm"
              :items="registration_list"
              :fields="fields"
              selectable
              select-mode="single"
              @row-selected="onRowSelected"
              foot-clone
              borderless
            >
              <template v-slot:cell(fullname)="data">
                <b>{{ data.item.firstName }} </b>  
                <b>{{ data.item.lastName.toUpperCase() }}</b>
              </template>

              <template v-slot:cell(contactinfo)="data">
                <b>Email: </b>{{ data.item.email }}  
                <br>
                <b>Phone: </b>{{ data.item.phone }}
              </template>

              <template v-slot:cell(services)="data">
                <b>{{ data.item.services}}</b>  
              </template>

              <template v-slot:cell(datetime)="data">
                <b>Date: </b>{{ data.item.date }}  
                <br>
                <b>Time: </b>{{ data.item.time }}
              </template>
            </b-table>
          </div>
        </template>
        <div class="delete-reservation-button-container" 
            v-if="isButtonDeleteVisible"
        >
          <b-button variant="danger" 
            class="delete-reservation-button"
            @click="deleteReservation()"
          >
            Delete reservation
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: 'admin',
    data () {
        return {
          isRowClicked: false,
          isButtonDeleteVisible: false,
          selected: [],
          registration_list: [],
          fields: [
            {
              key: 'id',
              sortable: true,
              label: '№',
              
            },
            {
              key: 'fullname',
              label: 'Full name',
              sortable: false
            },
            {
              key: 'contactinfo',
              label: 'Contact info',
              sortable: false
            },
            {
              key: 'services',
              label: 'Services',
              sortable: false
            },
            {
              key: 'datetime',
              label: 'Visit time',
              sortable: false
            },
          ]  
        }
    },
    
    methods: {

      loadReserv() {
        this.axios.get('reservation/get').then((response) => {
          this.$data.registration_list = response.data;
        })
      },

      onRowSelected(items) {
        this.selected = items
        if (Object.keys(this.selected).length) {
          this.isRowClicked = true
          this.isButtonDeleteVisible = true
        } else {
          this.isRowClicked = false
          this.isButtonDeleteVisible = false
        }
      },

      deleteReservation() {
        console.log(this.selected)
      },

    },
    mounted() {
        this.loadReserv();
    }
}

</script>

<style>

  .delete-reservation-button-container {
    position: fixed;
    padding: 40px;
    z-index: 10;
    bottom: 0;
    right: 0;
  }

  @media only screen and (max-width: 700px) {

    .delete-reservation-button-container {
      width: 100%;
      padding: 20px;
    }

    .delete-reservation-button {
      width: 100%;
    }

  }  

</style>