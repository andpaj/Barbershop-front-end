<template>
<div>
  <div class="row justify-content-center">
      <div class="col-12">
        <div class="bg-img-container">
          <div class="bg-img">
            <div class="bg-header-container">
              <h1>About us</h1>
            </div>
          </div>
        </div>
      </div>
  </div> 
  <div class="row justify-content-center content-container">
      <div class="col-10">
        <div>
          <div class="header-container">
            <h2>How to find us</h2>
          </div>
          <div class="row content-row">
            <div class="col-md-6">
              <div class="about">
                <div>
                  <h3>Contact information</h3>
                  <p>
                    Alko Barbers Tallinn
                    <br>
                    Ulemiste Keskus, (3. korrus)
                    <br>
                    Suur-Sõjamäe 4
                    <br>
                    11415 Tallinn.
                  </p>
                  <a href="mailto: alkostudents@ttu.com"><span itemprop="email" class="link">alkostudents@ttu.com</span></a>
                  <br>
                  <a href="tel: +37253050529" class="link">Tel. <span itemprop="telephone" class="link">+37253050529</span></a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="about">
                  <div>
                    <h3>Open</h3>
                    <p>
                      Mon: 10:00 - 20:00
                      <br>
                      Tue: 10:00 - 20:00
                      <br>
                      Wed: 10:00 - 20:00
                      <br>
                      Thu: 10:00 - 20:00
                      <br>
                      Fri: 10:00 - 20:00
                      <br>
                      Sat: 10:00 - 20:00
                      <br>
                      Sun: 10:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  </div>
  <div class="row justify-content-center">
      <div class="col-12">
        <div class="span8"><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=15+Springfield+Way,+Hythe,+CT21+5SH&amp;aq=t&amp;sll=52.8382,-2.327815&amp;sspn=8.047465,13.666992&amp;ie=UTF8&amp;hq=&amp;hnear=15+Springfield+Way,+Hythe+CT21+5SH,+United+Kingdom&amp;t=m&amp;z=14&amp;ll=51.077429,1.121722&amp;output=embed"></iframe></div>
      </div>
  </div>
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

  .about {
    padding-top: 40px;
    text-align: left;
  }
  
</style>