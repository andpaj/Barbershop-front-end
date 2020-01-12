import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCalendar from 'v-calendar';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'
import store from './store'


Vue.use(Vuex);

// Use v-calendar & v-date-picker components
Vue.use(VCalendar);

Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://40.112.69.208:9000/api/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
