<template>
    <b-row class="justify-content-md-center">
        <b-col cols="12" md="6" class="">
            <b-form class="form__signin sign-in__transaction"
                    @submit="onLoginSubmit">
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
            </b-form>
            <div class="link-container">
                <h6>Don't have an account?</h6>
                <b-button size="sm" :to="{ name: 'Register' }">Register now!</b-button>
            </div>
        </b-col>
    </b-row>
 </template>

 <script>
     import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
     const touchMap = new WeakMap()

     export default {
         data () {
             return {
                 user: {
                     firstname: '',
                     lastname: '',
                     username: '',
                     password: '',
                     email: '',
                     error: false,
                     errors: []
                 },
             }
         },
         methods:{
             delayTouch ($v) {
                 $v.$reset()
                 if (touchMap.has($v)) {
                     clearTimeout(touchMap.get($v))
                 }
                 touchMap.set($v, setTimeout($v.$touch, 1000))
             },
             onLoginSubmit (evt) {
                 evt.preventDefault()
                 alert(JSON.stringify(this.user))
                 this.axios.post('/login', {
                     username: this.user.firstName,
                     password: this.user.lastName,

                 })
                     .then((response) => {console.log(response)})
                     .catch((e) => {
                         console.error(e)
                     })

             },
         },
         mounted() {
             console.log('test')
         },

         validations: {
             user: {
                 firstname: {
                     required,
                     maxLength: maxLength(1000)
                 },
                 lastname: {
                     required,
                     maxLength: maxLength(1000)
                 },
                 username: {
                     required,
                     minLength: minLength(3),
                     maxLength: maxLength(32)
                 },
                 password: {
                     required,
                     minLength: minLength(8),
                     maxLength: maxLength(72)
                 },
                 email: {
                     required,
                     email,
                     maxLength: maxLength(256)
                 }
             }
         }
     }
 </script>

 <style scoped>

     .button-signin {
         width: 100%;
     }

     .link-container {
         text-align: center;
     }


 </style>