<template>
  <div>
    <div class="row justify-content-center">
        <div class="col-12">
          <div class="bg-img-container">
            <div class="bg-img">
              <div class="bg-header-container">
                <h1>Services managing</h1>
              </div>
            </div>
          </div>
        </div>
    </div> 
    <div class="row justify-content-center content-container">
        <div class="col-10 editor-container">
            <div>
              <div class="header-container">
                <h2>Manage services</h2>
              </div>
              <b-card no-body class="edit-tabs-container">
                <b-tabs pills card vertical class="tabs-container">

                  <b-tab title="Active services" active class="tab" v-on:click="getServ">
                    <b-list-group class="services-list-container">
                      <b-list-group-item class="flex-column align-items-start service-container" 
                        v-for="(service, index) in services" :key="index">
                        
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1" :value="service.serviceName">{{ service.serviceName }}</h5>
                          <b-button size="sm" variant="danger">Delete</b-button>
                        </div>

                        <p class="mb-1">Price: {{ service.price }} EUR.</p>

                        <em>Duration: {{ service.duration }} min.</em>
                      </b-list-group-item>

                    </b-list-group>
                  </b-tab>

                  <b-tab title="Add Service">
                    <div class="add-service">
                      <b-form @submit="submit" v-if="show">
                        <b-form-group
                          id="input-group-1"
                          label="Service info"
                          label-for="input-1"
                        >
                          <b-form-input
                            id="input-1"
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Enter new service name"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" 
                          label="Service Price:" 
                          label-for="input-2"
                          description="Put only number"  
                        >
                          <b-form-input
                            id="input-2"
                            v-model="form.price"
                            required
                            placeholder="Enter service price"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" 
                          label="Service duration:" 
                          label-for="input-3"
                          description="Put only number"
                        >
                          <b-form-input
                            id="input-3"
                            v-model="form.duration"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Add</b-button>
                      </b-form>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
        </div>
    </div>
  </div> 
</template>

<script>

  export default {
  name: 'add-service',
  data() {
    return {
      services:[],
      service: {name: "", price: "", duration:""},
      form: {
          name: '',
          price: null,
          duration: null,
        },
        show: true,
        response: ''
    }
  },


  methods:{
    submit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
      this.sendService()
    },

    loadServices() {
        this.axios.get('/services/findall').then((response) => {
          this.$data.services = response.data;
        })
    },

    sendService () {
      this.axios.post('/services/create', {
        name: this.form.name,
        price: this.form.price,
        duration: this.form.duration
      })
      .then((response) => {console.log(response)})
      .catch((e) => {
        console.error(e)
      })
    }

  },
    mounted() {
      this.loadServices();
    }
    
}


</script>

<style>

  .text{
    font-size: 20px;
  }
    .picture{
    padding-bottom: 100px;
  }
    .heading{
      padding-bottom: 80px;
    }

  .bg-img {
    background-image: linear-gradient(to bottom, rgba(45, 45, 49, 0.52), rgba(24, 23, 24, 0.73)),
      url('../assets/background/bg-1.jpg');
  }

  .service-container {
    border-right: none !important;
    border-left: none !important;
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;  
  }

  .edit-tabs-container {
    margin: 40px auto;
  }

  .editor-container {
    max-width: 1250px !important;
  }

  .tab-content {
    max-height: 500px !important;
    overflow: scroll;
  }

  @media only screen and (max-width: 700px) {
    h2 {
      text-align: center !important;
    }

    .btn {
      height: 2rem;
    }
  }

</style>