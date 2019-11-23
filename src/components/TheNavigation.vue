<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name: 'home' }">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{ name: 'about' }">About us</b-nav-item>
            <b-nav-item :to="{ name: 'services' }">Services</b-nav-item>
            <b-nav-item :to="{ name: 'pricelist' }">Pricelist</b-nav-item>
            <b-nav-item :to="{ name: 'contacts' }">Contacts</b-nav-item>
            <b-nav-item :to="{ name: 'admin' }">All reservations</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-button :to="{ name: 'reservation' }">Reservation</b-button>

        </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>