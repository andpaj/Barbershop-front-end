<template>
  <div class="contacts">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row-fluid">
        <div class="span8">
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&source=s_q&hl=en&geocode=&q=15+Springfield+Way,+Hythe,+CT21+5SH&aq=t&sll=52.8382,-2.327815&sspn=8.047465,13.666992&ie=UTF8&hq=&hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&t=m&z=14&ll=51.077429,1.121722&output=embed"></iframe>
        </div>

        <div class="span4">
          <h2>Alko-students</h2>
          <address>
            <strong>Contact names</strong><br>
              Melvin Kriisa 01234 567 890<br>
              Mark Kitsas 01234 567 890<br>
              Oleg Kortasov 01234 567 890<br>
            Andres Pajuste 01234 567 890<br>


          </address>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
    name: 'contacts',
  data () {
    return {
      msg: 'You can find and contact us here'
    }
  }
}
</script>

<style>

</style>