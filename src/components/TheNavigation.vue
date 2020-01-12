<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand :to="{ name: 'home' }">
                <img src="../assets/logo/barber-logo.png" alt="Home">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{ name: 'pricelist' }">Services</b-nav-item>
                    <b-nav-item :to="{ name: 'reservation' }">Reservation</b-nav-item>
                    <b-nav-item :to="{ name: 'about' }">About us</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item :to="{ name: 'login' }" v-if="!this.$store.state.auth.status.loggedIn" v-b-modal.loginModal>Login</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown right v-if="this.$store.state.auth.status.loggedIn">
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>Admin mode</em>
                        </template>
                        
                        <b-dropdown-item :to="{ name: 'profile' }">Profile</b-dropdown-item>
                        <b-dropdown-item :to="{ name: 'admin' }">All reservations</b-dropdown-item>
                        <b-dropdown-item :to="{ name: 'add-service' }">Add service</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
// import User from '../models/user';

export default {
    name: 'logout',
    data () {
        return {
            loading: false,
            message: ''
        }
    },

    methods: {
        logout () {
            
                this.$store.dispatch('auth/logout').then(
                    () => {
                        this.$router.push('/');
                    },
                    error => {
                        this.message = error.message;
                    }
                );
            
        }
    }

}
</script>

<style>

    img {
        filter: brightness(0) invert(1);
        width: 65px;
        height: 40px;
    }

</style>