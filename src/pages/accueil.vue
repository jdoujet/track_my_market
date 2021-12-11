<template>
  <div id="main">
      
        <div style="margin-top:10%; ">
          <v-row>
            <v-img class="supermarket_background" src="/supermarket_background.png"  >
              <v-container>
                <div style=" background-color: black">
                  <v-row style="margin-top:5%;">

                    <v-col style="background-color: yellow;" >
                      <v-row justify="center">
                        <v-img contain height="400" width="400" src="/app_smartphone.png"></v-img>
                      </v-row>
                      <!--<v-card style="background-size: cover;" >
                      
                      </v-card>-->
                    </v-col>

                    <v-col style="background-color: red;">
                      <v-row style="margin-bottom:8%; background-color: green;  transform: rotate(-7deg);">
                        <v-card-text class="main_title">Track My </v-card-text>
                      </v-row>
                      <v-row style="transform: rotate(-7deg);">
                        <v-card-text class="main_title2">Market</v-card-text>
                      </v-row>
                    </v-col>
                    
                  </v-row>

                  <v-img src="/logo.png"> </v-img>
                  
                

                </div>
            </v-container>
        </v-img>
        
    </v-row>
    <v-row>
      <v-card>
            <v-card-text>testsetsetset</v-card-text>
      </v-card>
    </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "accueil",
  methods: {
    /**
     * changes, redirects to the page
     * @param to :  name of the page to redirect
     */
    redirect(to) {
      this.$router.push(to);
    },


  },
};
</script>

<style>

.main_title{
 background-color:purple;
}

 @media only screen and (min-width: 200px) {
  .v-card__text.main_title{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
  
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 200%;
    }
    .v-card__text.main_title2{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 300%;
    }
 }

 @media only screen and (min-width: 600px) {
  .v-card__text.main_title{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
  
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 300%;
    }
  .v-card__text.main_title2{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 400%;
  }
 }

@media only screen and (min-width: 1000px)  {
  .v-card__text.main_title{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
  
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 400%;
    }
  .v-card__text.main_title2{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 550%;
  }
 }
@media only screen and (min-width: 1200px)  {
  .v-card__text.main_title{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 500%;
    }
  .v-card__text.main_title2{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   font-size: 700%;
    }
 }



 

</style>


