<template>
    <b-modal id="loginModal"  ref="login-modal" centered hide-footer hide-header>
        <div class="row justify-content-center" v-if="isLogin">
            <div class="Header">Login</div>
            <b-form class="form__signin sign-in__transaction"
                    @submit="onLoginSubmit">
                <b-form-group label="Username"
                                label-for="auth-username"
                                class="mb-2">
                    <b-form-input id="auth-username"
                                type="text"
                                required
                                v-model="user.username">
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Password"
                                label-for="auth-password">
                    <b-form-input id="auth-password"
                                type="password"
                                required
                                v-model="user.password">
                    </b-form-input>
                </b-form-group>
                <b-form-group>
                    <div class="div__button">
                    <b-button type="submit"
                            variant="primary"
                            class="button--signin"
                            >
                        SignIn
                    </b-button>
                    <p class="text forgot-password">Forgot password</p>
                    </div>
                </b-form-group>
            </b-form>
            
        </div>
        <div class="row justify-content-center" v-if="!isLogin">
            <div class="Header">Registration</div>
                <b-form class="form__registration sign-up__transaction"
                    @submit="onRegisterSubmit">
                    <b-form-group label="Firstname:"
                                    label-for="reg-firstname"
                                    class="mb-3 mr-1">
                        <b-form-input id="reg-firstname"
                                    class="label--margin"
                                    type="text"
                                    required
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
                                    v-model="user.email">
                    </b-form-input>
                    </b-form-group>
                    <b-button
                            type="submit"
                            variant="primary"
                            class="button-continue"
                            >
                    Registration
                    </b-button>
            </b-form>
        </div>
        <div class="row justify-content-center">
            <div class="buttons-container">
                <b-button class="" size="sm" @click="switchToRegister" v-if="isLogin">Registration</b-button>
                <b-button class="" size="sm" @click="switchToLogin" v-if="!isLogin">Login</b-button>
            </div>
        </div>
    </b-modal>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
const touchMap = new WeakMap()

export default {
    data () {
        return {
            isLogin: true,
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
            this.$refs['login-modal'].hide()

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
        },

        switchToRegister () {
            this.isLogin = false
        },

        switchToLogin () {
            this.isLogin = true
        }

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


  
</style>