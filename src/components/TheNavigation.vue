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
                        <b-nav-item v-if="!isActive" v-b-modal.loginModal>Login</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown right v-if="isActive">
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        
                        <b-dropdown-item :to="{ name: 'profile' }">Profile</b-dropdown-item>
                        <b-dropdown-item :to="{ name: 'admin' }">All reservations</b-dropdown-item>
                        <b-dropdown-item :to="{ name: 'add-service' }">Add service</b-dropdown-item>
                        <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

    data () {
        return {
            isActive: false
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