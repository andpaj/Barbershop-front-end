import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Pricelist from '../components/Pricelist'
import Reservation from '../components/Reservation'
import AdminPage from '../components/AdminPage'
import AddService from '../components/AddService'
import Profile from '../components/Profile'
import Login from "../components/Login"
import Register from "../components/Register"

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
      name: 'admin',
      meta: {
        auth: true
      }
    },
    {
      path: '/admin/add-service',
      component: AddService,
      name: 'add-service',
      meta: {
        auth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        auth: true
      }
    },

    {
      path: '/login',
      component: Login,
      name: 'login',
      meta: {
        auth: true
      }
    },
    {
      path: '/registration',
      component: Register,
      name: 'Register',
      meta: {
        auth: true
      }
    }
  ]
})