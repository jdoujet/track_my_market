<template>
  <div id="main">
      
        <div style="margin-top:5%; ">
          <v-row>
            <v-img class="supermarket_background" src="/supermarket_background.png"  >
              <v-container>
                <div style="background: rgba(0,0,0,0.0);">
                  <v-row style="margin-top:5%; background: rgba(0,0,0,0.0);">

                    <v-col cols="6" sm="6" md="6" lg="6" xl="6" style="background: rgba(0,0,0,0.0);" >
                      <v-carousel v-model="model"
                      hide-delimiter-background
                    cycle
                    style=" margin-top:17px;"
                    >
                        <v-carousel-item
                            v-for="(item, i) in img_carousel"
                            :key="item"
                        >
                          <v-sheet
                              color="rbga(0,0,0,0.0)"
                              height="100%"
                              tile
                              style="background: rgba(0,0,0,0.0);"
                          >
                            <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                            >
                              <v-img
                                  contain
                                  max-height="450"
                                  max-width="350"
                                  :src="''+img_carousel[i]"
                              ></v-img>

                            
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                      <!--<v-row justify="center">
                        <v-img contain height="500" width="400" src="/app_smartphone.png"></v-img>
                      </v-row>-->
                      
                    </v-col>

                    <v-col style="background: rgba(0,0,0,0.0);">
                      <v-row justify="center" style="margin-bottom:10%;  transform: rotate(-7deg);">
                        <v-card-text class="main_title">Track My </v-card-text>
                      </v-row>
                      <v-row justify="center" style="transform: rotate(-7deg);">
                        <v-card-text class="main_title2">Market</v-card-text>
                      </v-row>
                      <v-row justify="center">
                        <v-card style="margin-top:20%; background: rgba(0,0,0,0.6);">
                          <v-card-text style="font-size:17px; color:white;">
                            "Track My Market une application pour tous, pensée pour les malvoyants"
                          </v-card-text>
                          <v-card-text style="font-size:15px; color:white;">
                            Retrouvez dans les rayons vos articles recherchés en un rien de temps grâce à un système de géolocalisation et d'aide vocale avancés.
                            N'attendez plus pour télécharger cette application.
                          </v-card-text>
                        </v-card>
                      </v-row>
                      <v-row justify="center" style="margin-top:5%"> 
                        <v-btn color="#e47a19" height=50 width=150 style="font-size:17px; color:white">
                          TELECHARGER
                        </v-btn>
                      </v-row>
                    </v-col>
                    
                  </v-row>

                  
                  
                

                </div>
            </v-container>
        </v-img>
        
    </v-row>
    <v-container>
    <v-row style="margin-top:3%;">
      
        
      <v-col cols="4" sm="4" md="4" lg="4" xl="4" v-for="(item, index) in itemTab" :key="index" class="text-center">
            <v-card color="#e47a19">
              <div class="text-center" style="padding-top:3%;">
              <v-avatar
                color="white"
                width="120"
                height="120"
              >
                <v-icon class="iconify" dark size="70" style="color:#e47a19;" >{{item.icon}}</v-icon>
                
              </v-avatar>
              </div>
              <v-row justify="center">
                <v-card-title  style="padding-top: 5%; font-size:20px; color:white;">{{item.title}}</v-card-title>
              </v-row>
              <v-row justify="center">
                <v-card-text style="color:white;">{{item.text}}</v-card-text>
              </v-row>
            </v-card>
        </v-col>
        
    </v-row>
    </v-container>
    </div>
    <v-img src="/logo.png"> </v-img>
  </div>
</template>

<script>
export default {
  name: "accueil",
  data (){
    return{
      img_carousel: [
        '/app_smartphone.png',
        '/ensemble_vert.png'
      ],
      itemTab : [
      {
        icon : "mdi-cart-check",
        title : "Choisissez votre/vos article(s)",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",

      },
      {
        icon : "mdi-map-marker-path",
        title: "Suivez le chemin optimisé",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      {
        icon : "mdi-hand-coin-outline",
        title: "Récupérez votre/vos article(s)",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        
      }
    ],
    }
  },
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

.v-card__text.main_title{
  color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
  
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
   /*text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;*/
}

 .v-card__text.main_title2{
   color: #e47a19!important;
   /*font-size:80px!important;*/
   font-family: 'Bukhari Script', sans-serif;
   /*transform: rotate(-7deg);*/
   text-shadow: 2px 2px #ffde59,  6px 6px #FCFABF!important;
 }

 @media only screen and (min-width: 200px) {
  .v-card__text.main_title{
   font-size: 200%;
    }
    .v-card__text.main_title2{
   font-size: 300%;
    }
 }

 @media only screen and (min-width: 600px) {
  .v-card__text.main_title{
   font-size: 300%;
    }
  .v-card__text.main_title2{
   font-size: 400%;
  }
 }

@media only screen and (min-width: 1000px)  {
  .v-card__text.main_title{
   font-size: 400%;
    }
  .v-card__text.main_title2{
   font-size: 550%;
  }
 }
@media only screen and (min-width: 1200px)  {
  .v-card__text.main_title{
   font-size: 650%;
    }
  .v-card__text.main_title2{
   font-size: 700%;
    }
 }
@media only screen and (min-width: 1400px)  {
  .v-card__text.main_title{
   font-size: 500%;
    }
  .v-card__text.main_title2{
   font-size: 800%;
    }
 }


 

</style>


