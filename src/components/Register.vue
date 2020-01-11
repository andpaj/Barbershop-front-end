<template>
    <b-row class="justify-content-md-center">
        <b-col cols="12" md="6">
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

            onRegisterSubmit (evt) {
                evt.preventDefault()
                alert(JSON.stringify(this.user))
                this.axios.post('/registration', {
                    username: this.credentials.username,
                    password: this.credentials.password,
                    email: this.credentials.email,
                    firstname: this.credentials.firstname,
                    lastname: this.credentials.lastname,
                })
                    .then((response) => {console.log(response)})
                    .catch((e) => {
                        console.error(e)
                    })
            }
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