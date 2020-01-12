<template>
    <div>
    <b-row class="justify-content-md-center login-page-container">
        <b-col cols="6" md="6" class="login-image-col">
            <div class="bg-login-img-container">
            <div class="bg-login-img">
              <div class="bg-header-container">
                <h1>Register new profile</h1>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6">
            <b-row class="justify-content-md-center">
                <b-col cols="12" md="8">
                    <div class="logo-container">
                        <img src="../assets/logo/barber-logo.png" alt="">
                    </div>
                    <b-card-body title="Login to Alko barbers">
                        <b-form class="form__registration sign-up__transaction"
                                @submit="onRegisterSubmit">
                            <b-form-group label="Firstname:"
                                        label-for="reg-firstname"
                                        class="mb-3 mr-1">
                                <b-form-input id="reg-firstname"
                                            class="label--margin"
                                            type="text"
                                            required
                                            placeholder="Enter firstname"
                                            v-model="user.firstname">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Lastname:"
                                        label-for="reg-lastname"
                                        class="mb-3 ml-1">
                                <b-form-input id="reg-lastname"
                                            class="label--margin"
                                            type="text"
                                            required
                                            placeholder="Enter lastname"
                                            v-model="user.lastname">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Username:"
                                        label-for="reg-username"
                                        class="mb-3">
                                <b-form-input id="reg-username"
                                            class="label--margin"
                                            type="text"
                                            required
                                            placeholder="Enter username"
                                            v-model="user.username">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Password:"
                                        label-for="reg-password"
                                        class="mb-3">
                                <b-form-input id="reg-password"
                                            class="label--margin"
                                            type="password"
                                            required
                                            placeholder="Enter password"
                                            v-model="user.password">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Email:"
                                        label-for="reg-email"
                                        class="mb-3">
                                <b-form-input id="reg-email"
                                            class="label--margin"
                                            type="email"
                                            required
                                            placeholder="Enter email"
                                            v-model="user.email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-button
                                        type="submit"
                                        variant="outline-primary"
                                        class="button-signin"
                                        size="sm">
                                    Registration
                                </b-button>
                            </b-form-group>
                        </b-form>
                        <div class="link-container">
                            <b-button class="button-signin" variant="primary" :to="{ name: 'login' }" size="sm"> Back to Login</b-button>
                        </div>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-modal id="userModal"
             ref="submit-modal"
             centered
             hide-footer
             hide-header>
        <b-card class="modal-card">
            <b-card-title>User{{ user.username }} was succesfully created!</b-card-title>
            <b-card-text class="small text-muted">You can now log in!</b-card-text>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-button>
        </b-card>
    </b-modal>
    </div>
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

            onReset() {
                // Reset our form values
                this.user.firstname = ''
                this.user.lastname = ''
                this.user.username = ''
                this.user.password = ''
                this.user.email = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },

            showModal() {
                this.$refs['submit-modal'].show()
            },

            hideModal() {
                this.$refs['submit-modal'].hide()
                this.onReset()
            },

            onRegisterSubmit (evt) {

                evt.preventDefault()
                this.axios.post('/auth/registration', {
                    firstname: this.user.firstname,
                    lastname: this.user.lastname,
                    username: this.user.username,
                    password: this.user.password,
                    email: this.user.email,

                })
                    .then((response) => {console.log(response)})
                    .catch((e) => {
                        console.error(e)
                    })
                this.showModal()
            }
        },
        mounted() {
            console.log('')
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
                    minLength: minLength(6),
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

    .main-container {
        margin-top: -66px !important;
    }

    .login-page-container {
       height: calc(100vh - 66px);
    }

    .logo-container {
        margin-top: 70px;
        margin-bottom: 50px;
        text-align: center;
    }

    img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        width: 150px;
        height: 100px;
    }

    @media only screen and (max-width: 700px) {

        .login-image-col {
            display: none;
        }
    }

</style>