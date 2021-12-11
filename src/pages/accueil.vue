<template>
  <div id="main">
    <v-container>
      <div class="center mt-15" style="background-color: black">
        <v-card style=" background-color: transparent">
          <v-col style="background-color: red;">
            <v-row style="margin-bottom:4%; background-color: green;  transform: rotate(-7deg);">
              <v-card-text class="main_title">Track My </v-card-text>
            </v-row>
            <v-row style="transform: rotate(-7deg);">
              <v-card-text class="main_title2">Market</v-card-text>
            </v-row>
          </v-col>
          <v-img src="/logo.png"> </v-img>
          
        </v-card>
        
      </div>

      <v-col>
        <v-card height="300" color="#707070" style="padding: 1%">
          <v-col>
            <v-row style="margin-bottom: 2%">
              <v-card-title style="font-weight: bold; color: white">{{
                $t("texteHeader") 
              }}</v-card-title>
            </v-row>
            <v-row style="margin-left: 2%">
              <v-text style=" color: white">{{
                $t("texteAccueil")
              }}</v-text>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-container>
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


