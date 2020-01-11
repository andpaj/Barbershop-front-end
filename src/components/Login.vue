<template>
    <b-row class="justify-content-md-center">
        <b-col cols="6" md="6" class="">
            <div class="bg-login-img-container">
            <div class="bg-login-img">
              <div class="bg-header-container">
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="6" class="">

            <b-form class="form__signin sign-in__transaction"
                    @submit.prevent="handleLogin">
                <b-form-group label="Username:"
                              label-for="auth-username"
                              class="mb-2">
                    <b-form-input id="auth-username"
                                  type="text"
                                  required
                                  placeholder="Enter username"
                                  v-model="user.username">
                    </b-form-input>
                </b-form-group>

                <b-form-group label="Password:"
                              label-for="auth-password">
                    <b-form-input id="auth-password"
                                  type="password"
                                  required
                                  placeholder="Enter password"
                                  v-model="user.password">
                    </b-form-input>
                </b-form-group>

                <b-form-group>
                    <b-button type="submit"
                              variant="outline-primary"
                              class="button-signin"
                              size="sm">
                        Sign in
                    </b-button>
                </b-form-group>
                <div class="form-group">
                    <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
                </div>
            </b-form>
            <div class="link-container">
                <h6>Don't have an account?</h6>
                <b-link size="sm" :to="{ name: 'register' }">Register now!</b-link>
            </div>
        </b-col>
    </b-row>
 </template>

 <script>
     import User from '../models/user';

     export default {
         name: 'login',
         computed: {
             loggedIn() {
                 return this.$store.state.auth.status.loggedIn;
             }
         },
         data() {
             return {
                 user: new User('', ''),
                 loading: false,
                 message: ''
             };
         },
         created() {
             if (this.loggedIn) {
                 this.$router.push('/profile');
             }
         },
         methods: {
             handleLogin() {


                 if (this.user.username && this.user.password) {
                     this.$store.dispatch('auth/login', this.user).then(
                         () => {
                             this.$router.push('/profile');
                         },
                         error => {
                             this.loading = false;
                             this.message = error.message;
                         }
                     );
                 }
             }
         }
     };
 </script>

 <style scoped>

     .button-signin {
         width: 100%;
     }

     .link-container {
         text-align: center;
     }


 </style>