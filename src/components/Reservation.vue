<template>
  <div class="reservation">
    <div class="reservation-window float-right">
      <b-card  class="text-left" no-body >
        <b-tabs pills small card  nav-wrapper-class="w-40" v-model="tabIndex">
          <b-tab title="Choose service">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body title="Chosen Service">
                  <hr>
                  <b-list-group>
                    <b-list-group-item v-for="chosenService in form.services" :key="chosenService">{{ chosenService }}</b-list-group-item>
                  </b-list-group>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-body title="Available services">
                  <hr>
                  <b-list-group>
                    <b-list-group-item v-for="(service, index) in services" :key="index"
                      class="d-flex justify-content-between align-items-center">
                        <b-form-checkbox :value="service.serviceName" v-model="form.services">{{ service.serviceName }}
                        </b-form-checkbox>
                        <b-badge  pill>~{{ service.duration }} min.</b-badge>
                    </b-list-group-item>
                  </b-list-group>
                  <div class="text-right">
                    <b-button  class="mt-2" @click="tabIndex++">Next</b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Choose time">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body title="Chosen Service">
                  <hr>
                  <b-list-group>
                    <b-list-group-item v-for="chosenService in form.services" 
                        :key="chosenService">
                        {{ chosenService }}
                    </b-list-group-item>
                  </b-list-group>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-body title="Available time">
                      <hr>
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
                            <b-button variant="info" @click="getValue()" v-b-toggle.times>Submit</b-button>
                          </b-input-group-append>
                        </b-input-group>
                    </div>
                    <b-collapse id="times">
                      <b-list-group class="mt-3">
                        <b-form-group label="Choose time:">
                          <b-form-radio-group class="time-radio-list" stacked name="radio-size" size="lg">
                            <b-form-radio v-for="(time, index) in availableTime" :key="index" :value="time.time"
                              v-model="form.time" :options="availableTime">
                                {{ time.time }}
                            </b-form-radio>
                          </b-form-radio-group>
                        </b-form-group>
                      </b-list-group>
                    </b-collapse>
                  <div class="text-right">
                    <b-button  class="mt-2" @click="tabIndex++">Next</b-button>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Submit reservation">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-body title="Chosen Service">
                  <hr>
                  <b-list-group>
                    <b-list-group-item v-for="chosenService in form.services" :key="chosenService">{{ chosenService }}</b-list-group-item>
                  </b-list-group>
                </b-card-body>
                <b-card-body title="Chosen Time">
                  <hr>
                  <b-list-group>
                    <b-list-group-item>{{ form.time }}</b-list-group-item>
                  </b-list-group>
                </b-card-body>
              </b-col>
              <b-col md="6">
                <b-card-body title="Cantact">
                  <hr>
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
                    <b-button type="submit" variant="primary">Submit</b-button>
                  </b-form>
                </b-card-body>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        date: new Date(),
        tabIndex: 0,
          msg: 'Reservation',
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
          console.log(this.date)
          this.form.date  = this.date;
      },

      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.sendReservation()
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
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
          this.axios.get('/services/get').then((response) => {
            console.log(response.data)
            this.$data.services = response.data;
          })
       },
      loadTimes() {
        this.axios.get('/times').then((response) => {
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
          services: 'services',
          date: this.form.data,
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
       this.loadTimes();
    }
  }
</script>

<style scoped>
  .reservation {
    position: fixed;
    background-image: url('../assets/reservation-bg.jpg');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .reservation-title {
    margin: 30px auto;
  }

  .reservation-window {
    margin: 80px ;
    
  }

  .card {
    width: 1000px;
    height: 600px;
  }

  .time-radio-list {
    height: 240px;
    overflow: scroll;
  }

</style>