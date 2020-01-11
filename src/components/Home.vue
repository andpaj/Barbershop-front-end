<template>
    <div class="homepage">
       <div class="row justify-content-center">
            <div class="col-12">
                <div class="bg-img-container">
                    <div class="bg-img">
                    <div class="bg-header-container">
                        <h1>Alko barbers</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
       <b-row class="row justify-content-center">
           <b-col cols="12" md="10" class="tabs-class">
               <div class="header-container">
                <h2>Our Services</h2>
              </div>
              <div class="description-text-container">
                <p>Alko barbers Salon for Men delivers high quality haircuts, shaves, 
                  and spa services in a relaxed, masculine environment. Our team of experienced, 
                  friendly stylists and barbers are committed to giving you the outstanding 
                  client service that you’ve earned. Look below to see the services we offer to help you relax, 
                  look great, and feel confident.
                </p>
              </div>
              <div class="services-card-container">
                <b-card-group deck>
                    <b-card  title="Hair">
                        <b-card-text>
                        Cut and style,  one step hair color, highlights, toner, corrective color, hair and scalp treatments.
                        </b-card-text>
                    </b-card>

                    <b-card title="Shave">
                        <b-card-text>
                        Traditional straight razor shaves, hot towels, and balm treatment.
                        </b-card-text>
                    </b-card>

                </b-card-group>
              </div>
           </b-col>
       </b-row> 
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .description-text-container {
        padding: 40px 60px;
    }

    @media only screen and (max-width: 700px) {

        .header-container {
            display: block !important;
            padding-top: 20px;
            margin: 0 20px;
        }

    }

</style>
