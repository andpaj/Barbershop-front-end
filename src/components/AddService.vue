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
    <b-row class="row justify-content-center">
        <b-col cols="12" md="8" class="tabs-class editor-container">
            <div>
              <div class="header-container">
                <h2>Manage services</h2>
              </div>
              <!-- <p class="tab-description">Here you can add or delete services</p> -->
              <b-card no-body class="edit-tabs-container">
                <b-tabs 
                  pills 
                  card 
                  class="tabs-container"
                  :vertical="isVertical"
                  :nav-wrapper-class="nav_wrapper_class"
                  :active-nav-item-class="active_nav_item_class"
                  :content-class="content_class"
                  :nav-class="nav_class"
                >
                  <b-tab 
                    title="Active services" 
                    :title-link-class="title_link_class"
                    active
                  >
                    <b-list-group class="services-list-container">
                      <b-list-group-item class="flex-column align-items-start service-container" 
                        v-for="(service, index) in services" :key="index">
                        
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1" :value="service.serviceName">{{ service.serviceName }}</h5>
                          <b-button class="button-delete" size="sm" variant="danger" @click="deleteService(service.id)">Delete</b-button>
                        </div>

                        <p class="mb-1">Price: {{ service.price }} EUR.</p>

                        <em>Duration: {{ service.duration }} min.</em>
                      </b-list-group-item>

                    </b-list-group>
                  </b-tab>
                  <b-tab 
                    title="Add Service"
                    :title-link-class="title_link_class"
                  >
                    <div class="add-service">
                      <b-card-body title="New service">
                        <hr>
                        <p class="tab-description" >Fill all inputs to add new service.</p>
                        <b-form @submit="submit" v-if="show">
                          <b-form-group
                            id="input-group-1"
                            label="Service name"
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
                              placeholder="Enter service duration"
                              required
                            ></b-form-input>
                          </b-form-group>
                          <div class="text-right">
                          <b-button type="submit" variant="primary">Add</b-button>
                          </div>
                        </b-form>
                      </b-card-body>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card>
            </div>
        </b-col>
    </b-row>
    <!-- Submit modal window! -->
    <b-modal id="serviceModal"  
            ref="submit-modal" 
            centered 
            hide-footer
            hide-header
        >
        <b-card class="modal-card">
          <b-card-title>Service {{ form.name }} was succesfully created!</b-card-title>
          <b-card-text class="small text-muted">You can find it in Services page or in Active services tab on the current page</b-card-text>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-card>
    </b-modal>
  </div> 
</template>

<script>
  import UserService from '../services/user.service';

  export default {
  name: 'add-service',
  data() {
    return {
      isVertical: true,
      nav_wrapper_class: 'nav_wrapper_class',
      active_nav_item_class: 'active_nav_item_class',
      title_link_class: 'title_link_class',
      content_class: 'content_class',
      nav_class: 'nav_class',
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

  created() {
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  
  methods:{
    onResize() {
      if (window.innerWidth > 770) {
        this.isVertical = true
      } else {
        this.isVertical = false
      }
    },

    deleteService(id) {
      this.axios.delete('/services/delete', {
        data: {
          id: id
        }
      })
              .then((response) => {console.log(response)})
              .catch((e) => {
                console.error(e)
              })

    },

    submit(evt) {
      evt.preventDefault()
      this.sendService()
      this.showModal()
    },

    onReset() {
      // Reset our form values
      this.form.name = ''
      this.form.price = null
      this.form.duration = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },

    showModal() {
      this.$refs['submit-modal'].show()
    },

    hideModal() {
      this.$refs['submit-modal'].hide()
      this.onReset()
    },

    loadServices() {
      console.log('test')
        this.axios.get('/services/findall').then((response) => {
          this.$data.services = response.data;
        })
    },

    sendService () {
      let head = UserService.getHeader();
      console.log(head)
      this.axios.post('/services/create', {
        serviceName: this.form.name,
        price: this.form.price,
        duration: this.form.duration
      }, {headers: head})
      .then((response) => {console.log(response)})
      .catch((e) => {
        console.error(e)
      })
    }
  },

  mounted() {
      this.loadServices();
      this.onResize();
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
    border-radius: unset !important;
    box-shadow: 0px 0px 8px 2px #bdc0c8;
  }

  .editor-container {
    max-width: 1250px !important;
  }

  /* Custom tabs */

  .nav_wrapper_class {
    padding: 0 !important;
    background-color: #6c757d !important;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    margin-bottom: -1px;
    box-shadow: 0px 0px 8px 2px #bdc0c8;
  }

  .nav_class {
    flex-wrap: unset !important;
    padding: 0 !important;
    width: 180px;
  }

  .active_nav_item_class {
    background-color: #798086 !important;
    border-radius: 0 !important;
    border-right: 3px solid #583706;
    font-weight: 800 !important;
  }

  .title_link_class {
    color: white;
    padding: 1rem 1.5rem !important;
  }

  .title_link_class:hover {
    color: #583706;
  }

  @media only screen and (max-width: 700px) {

    .header-container {
      display: none;
    }

    .nav_wrapper_class {
      max-width: unset !important;
      width: 100vw !important;
    }

    .nav_class {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
      justify-content: space-between;
    }

    .edit-tabs-container {
      margin: unset;
    }

    .active_nav_item_class {
      border-bottom: 3px solid #583706;
      border-right: unset;
    }

    h2 {
      text-align: center !important;
    }

    .title_link_class {
      text-align: center;
    }

    .button-delete {
      height: 2rem;
    }
  }

</style>