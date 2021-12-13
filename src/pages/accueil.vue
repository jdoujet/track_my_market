<template>
  <div id="main">
      
        <div style="margin-top:5%;">
          <v-row>
            <!--height=620-->
            <v-img height=700 class="supermarket_background" src="/supermarket_background.png">
              <v-container>
                <div style="background: rgba(0,0,0,0.0);">
                  <v-row style="margin-top:5%; background: rgba(0,0,0,0.0);">

                    <v-col v-if="windowWidth>450" cols="6" sm="6" md="6" lg="6" xl="6" style="background: rgba(0,0,0,0.0);" >
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

                    <v-col v-if="windowWidth>450" align="center" style="background: rgba(0,0,0,0.0);">
                      <v-row justify="center" style="margin-bottom:10%; transform: rotate(-7deg);webkit-transform : rotate(-7deg);">
                        <v-card-text class="main_title">Track My </v-card-text>
                      </v-row>
                      <v-row justify="center" style="transform: rotate(-7deg); webkit-transform : rotate(-7deg);">
                        <v-card-text class="main_title2">Market</v-card-text>
                      </v-row>
                      <v-row justify="center" style="margin-left:2%; margin-right:2%;">
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

                    <v-col v-else align="center" style="background: rgba(0,0,0,0.0); margin-top:10%;">
                      <v-row justify="center" style="margin-bottom:10%; transform: rotate(-7deg);">
                        <v-card-text class="main_title">Track My </v-card-text>
                      </v-row>
                      <v-row justify="center" style="transform: rotate(-7deg);">
                        <v-card-text class="main_title2">Market</v-card-text>
                      </v-row>
                      <v-row justify="center" style="margin-left:2%; margin-right:2%;">
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
                    <!--<span class="animated bounce"></span>-->
                    
                  </v-row>

                  
                  
                
                <v-row justify="center" style="margin-top:-5%;" ><section id="section07" class="demo" style="position: relative;">
  
  <a href=""  onclick="event.preventDefault(); $('html, body').animate({ scrollTop: $('#steps_sections').offset().top}, 500, 'linear');"><span></span><span></span><span></span></a>
</section></v-row>
<!-- event.preventDefault();window.scrollTo(0, $('#steps_sections').offset().top-85);-->
                </div>
            </v-container>
        </v-img>
        
    </v-row>
    <v-container id="steps_sections">
    <v-row class="w3-container" style="margin-top:3%;">
      
        
      <v-col cols="12" sm="12" md="4" lg="4" xl="4" v-for="(item, index) in itemTab" :key="index" class="text-center, w3-center w3-animate-left">
            <v-card  color="#e47a19" style="margin-bottom:3%;">
              <div class="text-center" style="padding-top:5%;">
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
                <v-card-text style="color:white; margin-bottom:4%">{{item.text}}</v-card-text>
              </v-row>
            </v-card>
        </v-col>
        
    </v-row>
    </v-container>
    <v-img class="logo" src="/logo.png"> </v-img>

    </div>
    
   
  </div>
</template>

<script>
export default {
  name: "accueil",
  data (){
    return{
      img_carousel: [
        '/app_smartphone.png',
        '/app_smartphone2.png',
        '/app_smartphone3.png',
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
    windowWidth: window.innerWidth,
    }
  },

  mounted(){
    window.onresize = () => {
                this.windowWidth = window.innerWidth
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

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.logo{
  animation: float 6s ease-in-out infinite;
}
#section07 a {
  padding-top: 70px;
}
#section07 a span {
  position:absolute;
  top: 0;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -12px;
  border-left: 5px solid #fff;
  border-bottom: 5px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb07 2s infinite;
  animation: sdb07 2s infinite;
  opacity: 0;
  box-sizing: border-box;
}
#section07 a span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
#section07 a span:nth-of-type(2) {
  top: 16px;
  -webkit-animation-delay: .15s;
  animation-delay: .15s;
}
#section07 a span:nth-of-type(3) {
  top: 32px;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}
@-webkit-keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb07 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


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
   font-size: 300%;
    }
    .v-card__text.main_title2{
   font-size: 400%;
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


