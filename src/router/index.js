import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Pricelist from '../components/Pricelist'
import Contacts from '../components/Contacts'
import Reservation from '../components/Reservation'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/services',
      component: Services,
      name: 'services'
    },
    {
      path: '/pricelist',
      component: Pricelist,
      name: 'pricelist'
    },
    {
      path: '/contacts',
      component: Contacts,
      name: 'contacts'
    },
    {
      path: '/reservation',
      component: Reservation,
      name: 'reservation'
    },
    {
      path: '/test',
      component: Test,
      name: 'test'
    }
  ]
})