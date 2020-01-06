import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Pricelist from '../components/Pricelist'
import Reservation from '../components/Reservation'
import AdminPage from '../components/AdminPage'
import AddService from '../components/AddService'

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
      path: '/reservation',
      component: Reservation,
      name: 'reservation'
    },
    {
      path: '/admin',
      component: AdminPage,
      name: 'admin'
    },
    {
      path: '/admin/add-service',
      component: AddService,
      name: 'add-service'
    }
  ]
})