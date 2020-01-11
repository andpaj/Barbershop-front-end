<template>
  <div class="reservation">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="bg-img-container">
          <div class="bg-img">
            <div class="bg-header-container">
              <h1>Time Reservation</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="8" class="tabs-class">
        <b-card no-body class="tabs-card-container">
          <div class="text-left" >
            <b-tabs pills 
                    v-model="tabIndex" 
                    class="reservation-tabs"
                    :nav-wrapper-class="nav_wrapper_class"
                    :active-nav-item-class="active_nav_item_class"
                    :content-class="content_class"
                    :nav-class="nav_class"
            >
              <b-tab title="Choose service" 
                  :title-link-class="title_link_class"
              >
                <b-row no-gutters>
                  <b-col order="2"  order-md="0" md="6" class="reservation-info-list">
                    <b-card-body title="Chosen Service">
                      <hr>
                      <b-list-group>
                        <b-list-group-item v-for="chosenService in form.services" :key="chosenService">{{ chosenService }}</b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-col>
                  <b-col order="1" order-md="0" md="6" class="reservation-choose-list">
                    <b-card-body title="Available services">
                      <hr>
                      <p class="tab-description" >Choose one ore more services that you want</p>
                      <b-list-group class="services-list-container">
                        <b-list-group-item v-for="(service, index) in services" :key="index"
                          class="d-flex justify-content-between align-items-center">
                            <b-form-checkbox :value="service.serviceName" v-model="form.services">{{ service.serviceName }}
                            </b-form-checkbox>
                            <b-badge  pill>~{{ service.duration }} min.</b-badge>
                        </b-list-group-item>
                      </b-list-group>
                      <div class="text-right">
                        <b-button  class="mt-2" @click="clickNext">Next</b-button>
                      </div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Choose time"
                  :title-link-class="title_link_class"
              >
                <b-row no-gutters>
                  <b-col order="2" order-md="0" md="6" class="reservation-info-list">
                    <b-card-body title="Chosen Service">
                      <hr>
                      <b-list-group>
                        <b-list-group-item v-for="chosenService in form.services" 
                            :key="chosenService">
                            {{ chosenService }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                    <b-card-body title="Chosen Date">
                      <hr>
                      <b-list-group v-if="isTimeListVisible">
                        <b-list-group-item>{{ form.date }}</b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                  </b-col>
                  <b-col  order="1" order-md="0" md="6" class="reservation-choose-list">
                    <b-card-body title="Available time">
                        <hr>
                        <p class="tab-description" >Choose date and submit it. After that choose more suitebalte time for you</p>
                        <div class="w-full max-w-sm">
                          <span>Choose date:</span>
                            <b-input-group class="mt-1">
                              <v-date-picker title-position="left"
                                :min-date='new Date()' v-model="date"
                                class="date-input"
                              >
                              <!--Custom Input Slot-->
                                <input
                                  id="date"
                                  slot-scope="{ inputProps, inputEvents, isDragging }"
                                  :class="[`shadow appearance-none border rounded-l w-full py-2 px-3 ${ isDragging ? 'text-gray-400' : 'text-gray-700' }`]"
                                  v-bind="inputProps"
                                  v-on="inputEvents">
                              </v-date-picker>
                              <b-input-group-append>
                                <b-button  
                                  variant="primary" 
                                  @click="getValue()" 
                                >
                                Submit
                                </b-button>
                              </b-input-group-append>
                            </b-input-group>
                        </div>
                        <div class="time-container">
                          <b-list-group class="mt-3 time-list-group" v-if="isTimeListVisible">
                            <b-form-group label="Choose time:">
                              <b-form-radio-group class="time-radio-list" stacked name="radio-size" size="lg">
                                <b-form-radio v-for="(time, index) in availableTime" :key="index" :value="time.time"
                                  v-model="form.time" :options="availableTime">
                                    {{ time.time }}
                                </b-form-radio>
                              </b-form-radio-group>
                            </b-form-group>
                          </b-list-group>
                        </div>
                      <div class="text-right">
                        <b-button  class="mt-2" @click="clickNext">Next</b-button>
                      </div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Submit reservation"
                  :title-link-class="title_link_class"
              >
                <b-row no-gutters>
                  <b-col md="6" class="reservation-info-list">
                    <b-card-body title="Chosen Service">
                      <hr>
                      <b-list-group>
                        <b-list-group-item v-for="chosenService in form.services" :key="chosenService">{{ chosenService }}</b-list-group-item>
                      </b-list-group>
                    </b-card-body>
                    <b-card-body title="Chosen Time">
                      <hr>
                      <b-card>
                          <b-card-text>Date: {{ form.date }}</b-card-text>

                          <b-card-text>Time: {{ form.time }}</b-card-text>
                        </b-card>
                    </b-card-body>
                  </b-col>
                  <b-col md="6" class="reservation-choose-list">
                    <b-card-body title="Contact">
                      <hr>
                      <p class="tab-description" >Fill all fields for reservation submitting. To follow your reservation history you can register as user.</p>
                      <b-form @submit="onSubmit" v-if="show">
                        <b-form-group id="input-group-1" label="Your First Name:" label-for="input-1">
                          <b-form-input
                            id="input-1"
                            v-model="form.firstName"
                            required
                            placeholder="Enter First Name"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Your Last Name:" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            v-model="form.lastName"
                            required
                            placeholder="Enter Last Name"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Your Telephone:" label-for="input-3">
                          <b-form-input
                            id="input-3"
                            v-model="form.phone"
                            required
                            placeholder="Enter Telephone number"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-4" label="Email address:" label-for="input-4">
                          <b-form-input
                            id="input-4"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Enter email"
                          ></b-form-input>
                        </b-form-group>
                        <div class="text-right">
                          <b-button type="submit" variant="primary">Submit</b-button>
                        </div>
                      </b-form>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <!-- Submit modal window! -->
    <b-modal id="reservationModal"  
            ref="submit-modal" 
            centered 
            hide-footer
            hide-header
        >
        <b-card title="You reservation was successfully created!" class="modal-card">
          <b-card-text>Reservation date: {{ form.date }}</b-card-text>
          <b-card-text>Reservation time: {{ form.time }}</b-card-text>
          <b-card-text>Chosen services: {{ form.services.join() }}</b-card-text>
          <b-card-text class="small text-muted">You can watch your reservation history in your Profile after login.</b-card-text>
          <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-card>
    </b-modal>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        date: new Date(),
        tabIndex: 0,
        isTimeListVisible: false,
        nav_wrapper_class: 'nav_wrapper_class_res',
        active_nav_item_class: 'active_nav_item_class_res',
        title_link_class: 'title_link_class_res',
        content_class: 'content_class_res',
        nav_class: 'nav_class_res',
        form: {
          date: '',
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          services: [],
          time: ''
        },
        selectedServices: [],
        availableTime: [],
        services: [],
        show: true,
        response: ''
      }
    },
    methods: {
      getValue () {
          this.form.date  = this.date;
          this.isTimeListVisible = true;
          this.loadTimes();
      },

      onSubmit(evt) {
        evt.preventDefault()
        this.sendReservation()
        this.showModal()
      },

      clickNext() {
        window.scrollTo(0,0);
        this.tabIndex++;
      },

      showModal() {
        this.$refs['submit-modal'].show()
      },

      hideModal() {
        this.$refs['submit-modal'].hide()
        this.onReset()
        this.$router.push({name:"home"})
      },

      onReset() {
        // Reset our form values
        this.form.email = ''
        this.form.firstName = ''
        this.form.lastName = ''
        this.form.phone = ''
        this.form.time = ''
        this.form.date = ''
        this.form.services = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      loadServices() {
          this.axios.get('/services/findall').then((response) => {
            console.log(response.data)
            this.$data.services = response.data;
          })
       },
      loadTimes() {
        this.axios.get('/times/findall').then((response) => {
          console.log(response.data)
          this.$data.availableTime = response.data;
        })
      },
      sendReservation() {
        this.axios.post('/reservation/post', {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          phone: this.form.phone,
          services: this.form.services.join(),
          date: this.form.date,
          time: this.form.time
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
  
  .time-radio-list {
    height: 240px;
    overflow: scroll;
  }

  .card-header {
    padding: 0;
  }

  .tabs-card-container {
    border-radius: unset !important;
    box-shadow: 0px 0px 8px 2px #bdc0c8;
  }

  /* Custom style for bootstrap default tabs */

  .tabs-class {
    margin: 40px auto;
  }

  .nav_wrapper_class_res {
    padding: 0 !important;
    background-color: #6c757d !important;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0px 0px 8px 2px #bdc0c8;
  }

  .nav_class_res {
    flex-wrap: unset !important;
  }

  .active_nav_item_class_res {
    background-color: #798086 !important;
    border-radius: 0 !important;
    border-bottom: 3px solid #583706;
    font-weight: 800 !important;
  }

  .title_link_class_res {
    color: white;
    padding: 1rem 1.5rem !important;
  }

  .title_link_class_res:hover {
    color: #583706;
  }

  .reservation-info-list {
    background-color: rgb(241, 240, 240);
    border-right: 1px solid rgba(0, 0, 0, 0.125);
  }

  .reservation-choose-list {
    background-color: white;
  }

  .services-list-container {
    height: 300px;
    overflow: scroll;
  }

  .time-container {
    height: 200px;
  }

  .time-list-group {
    height: inherit;
  }

  .time-radio-list {
    height: 200px;
    overflow: scroll;
  }

  .modal-card {
    border: 0 !important;
  }

  @media only screen and (max-width: 700px) {
    .tabs-class {
      margin: unset;
    }

    .reservation-info-list {
      position: fixed;
    }

    .services-list-container {
      height: unset;
      overflow: unset;
    }

    .title_link_class_res {
      text-align: center;
    }

    .time-container {
      min-height: 200px;
      height: unset;
    }

    .time-radio-list {
      height: unset;
      overflow: unset;
    }
  }

</style>