<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Alkostudents barbershop'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
        color: aliceblue;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }

     .hello {
        position: fixed;
        background-image: url('../assets/reservation-bg.jpg');
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }


</style>
