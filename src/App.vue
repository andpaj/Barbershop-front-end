<template>
  <div id="app">
    <div id="nav" >
      <the-navigation/>
    </div>
    <b-row class="row justify-content-center main-container">
      <b-col cols="12">
        <router-view :key="$route.fullPath"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation'
export default {
  name: 'App',
  components: {
    'the-navigation': TheNavigation,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #eef1f1 !important;
  }

  #app {
    min-height: 100%;
    overflow: auto;
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  } 

  .link {
    color: #a07431;
    text-decoration: underline;
    font-weight: 600;
  }

  .link:hover {
    color: #583706;
  }

  .main-container {
    margin-top: 66px;
  }

  #nav {
    position: fixed;
    width: 100%;
    z-index: 2;
  }

  .bg-img-container {
    width: 100%;
    height: 40vh;
  }

  .bg-login-img-container {
    width: 100%;
    height: 100%;
  }

  .bg-login-img {
    width: inherit;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(to bottom, rgba(45, 45, 49, 0.52), rgba(24, 23, 24, 0.73)),
      url('./assets/background/bg-1.jpg');
  }

  .bg-img {
    width: inherit;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg-img-container {
    width: 100%;
    height: 40vh;
  }

  .bg-img {
    width: inherit;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
  }

  .bg-header-container {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    color: #ffffff;
    border-bottom: 2px solid;
  }

  .content-container {
    margin: 40px 0px;
  }

  .header-container {
    border-bottom: 2px solid;
  }

  h1 {
    font-size: 96px !important;
    font-weight: 700 !important;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0 !important;
  }

  h2 {
    font-size: 50px !important;
    font-weight: 700 !important;
    margin-bottom: 2rem !important;
    text-transform: uppercase;
  }

  h3 {
    font-weight: 700 !important;
    text-transform: uppercase;
  }

  p {
    font-weight: 500;
  }

  p.tab-description {
    font-size: 12px !important;
  }

  .outline-none {
    outline: none !important;
    z-index: unset !important;
  }

  .outline-none:focus {
    outline: none !important;
  }

  .outline-none:active {
    outline: none !important;
  }

  .alert-container {
    margin-top: 10px; 
  }

  .login-page-container {
    height: 100%;
  }

  .row {
    margin-left: unset !important;
    margin-right: unset !important;
  }

  .col-12, .col-6 {
    padding-left: unset !important;
    padding-right: unset !important;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 40px !important;
    }

    .alert-container {
      margin-top: 0px; 
    }
  }

</style>
