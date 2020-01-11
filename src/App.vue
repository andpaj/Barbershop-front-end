<template>
  <div id="app">
    <div id="nav">
      <the-navigation/>
    </div>
    <div class="row justify-content-center main-container">
      <div class="col-12">
        <login-modal title="User Modal" text="Testing Bootstrap Modal" />
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation'
import LoginModal from "./components/LoginModal.vue";
export default {
  name: 'App',
  components: {
    'the-navigation': TheNavigation,
    'login-modal': LoginModal
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

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 40px !important;
    }

    .alert-container {
      margin-top: 0px; 
    }
  }

</style>
