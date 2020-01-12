<template>
    <div class="container" v-if="this.$store.state.auth.status.loggedIn">
        <header class="jumbotron">
            <h3>
                <strong>{{currentUser.username}}</strong> Profile
            </h3>
        </header>
        <p>
            <strong>Id:</strong>
            {{currentUser.id}}
        </p>
        <p>
            <strong>Firstname:</strong>
            <strong v-for="(rol,index) in currentUser.users" :key="index">{{rol}}</strong>
            {{currentUser.firstname}}
        </p>
        <p>
            <strong>Lastname:</strong>
            {{currentUser.lastname}}
        </p>
        <p>
            <strong>Email:</strong>
            {{currentUser.email}}
        </p>
        <strong>Authorities:</strong>
        <ul>
            <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        mounted() {
            if (!this.currentUser) {
                this.$router.push('/login');
            }
        }
    };
</script>