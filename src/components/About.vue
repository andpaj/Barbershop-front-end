<template>
  <div class="about">
    <div class="heading"><h1>{{ msg }}</h1></div>
    <b-container class="text">
      <b-row>
        <b-col>Our barbershop has appeared due to the project of our university and inspired by Tallinn barbershop "Truman"
          <b-img src="https://www.ttu.ee/public/u/ulikool/Tunnusgraafika/Logod/TTU_lyhend/Peamine/TTU_logo_lyhend_peamine_EST_print.jpg" fluid alt="Responsive image" class="picture"></b-img>
        </b-col>
        <b-col>We have chosen this topic because nowadays it is very popular industry. We offer you a web application that will gift you the best haircut in your life
          <b-img src="https://s3-media0.fl.yelpcdn.com/bphoto/d5jrXTgjiCKDTLS5sqWJgw/ls.jpg" fluid alt="Responsive image"></b-img>
        </b-col>

        <b-col>
          Front-end created using Vue js and Bootstrap
          <b-img src="https://www.fullstackpython.com/img/logos/vuejs-wide.png" fluid alt="Responsive image"></b-img>
        </b-col>

      </b-row>
    </b-container>
  </div>

</template>

<script>
export default {
    name: 'about',
    data () {
        return {
        msg: 'About us '
        }
    }
}
</script>

<style>
.text{
  font-size: 20px;
}
  .picture{
  padding-bottom: 100px;
}
  .heading{
    padding-bottom: 80px;
  }


</style>