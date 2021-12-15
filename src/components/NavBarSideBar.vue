<template>
  <div>
    <!--app bar desktop-->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      style="background-color: #f48e30; border-bottom: 1px solid #a6a6a6"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="aroundLogo"> </v-toolbar-title>
      <v-avatar
        color="#041d66"
        width="55"
        height="55"
        style="border-radius: 50%; margin-top: 1%; margin-bottom: 1%"
      >
        <v-avatar
          color="white"
          width="50"
          height="50"
          style="border: 8px solid #2f3a40; border-radius: 50%"
          @click="redirect('/')"
        >
          <v-icon
            class="iconify"
            data-icon="mdi:cart-minus"
            height="10"
            width="10"
            style="color: #2f3a40"
          ></v-icon>
        </v-avatar>
      </v-avatar>
      <v-toolbar-title
        class="aroundTitle"
        v-t="'websiteTitle'"
        style="background-color: #f48e30; color: white"
        @click="redirect('/image')"
      >
      </v-toolbar-title>

       <template v-slot:extension>
              
              <v-fab-transition>
                <v-btn
                  v-if="windowWidth>500"
                  @click="changeFontSize('+')"
                  color="black"
                  fab
                  dark
                  big
                  absolute
                  bottom
                  right
                >
                  <v-icon size="40">mdi-magnify-plus-outline</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  @click="changeFontSize('+')"
                  color="black"
                  fab
                  dark
                  small
                  absolute
                  bottom
                  right
                >
                  <v-icon size="30">mdi-magnify-plus-outline</v-icon>
                </v-btn>
              </v-fab-transition>
             
              <v-fab-transition>
                <v-btn
                  v-if="windowWidth>500"
                  @click="changeFontSize('-')"
                  class="btn-zoom-minus"
                  color="black"
                  fab
                  dark
                  big
                  absolute
                  bottom
                  right
                >
                  <v-icon size="40">mdi-magnify-minus-outline</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  @click="changeFontSize('-')"
                  class="btn-zoom-minus"
                  color="black"
                  fab
                  dark
                  small
                  absolute
                  bottom
                  right
                >
                  <v-icon size="30">mdi-magnify-minus-outline</v-icon>
                </v-btn>
              </v-fab-transition>
             
      </template>
      
              
      
      <v-toolbar
        v-if="!isMobile"
        color="#f48e30"
        style="box-shadow: none;"
      >
        <v-spacer></v-spacer>
        <v-btn
          large
          text
          v-for="(item, index) in items"
          :key="index"
          v-on="on"
          color="white"
          @click="redirect(item.to)"
        >
          {{ $t(item.title) }}
        </v-btn>
        <locale-changer></locale-changer>
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<script>
import localeChanger from "./locale-changer.vue";

export default {
  components: { localeChanger },
  name: "sidebar",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      isMobile: null,
      items: [
        {
          icon: "mdi-home-map-marker",
          title: "menuHome",
          to: "/",
        },
        {
          icon: "mdi-database-plus",
          title: "menuCrudStation",
          to: "/articles",
        },
      ],
      miniVariant: false,
      right: true,
      title: "Sauveteurs du dunkerquois",

      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },

  methods: {
    redirect(to) {
      this.$router.push(to);
    },

    changeFontSize(symbol){

      let tabClassFontToIncrease= [
      'main_title',
      'main_title2',
      'app_block1_title',
      'app_block1_description',
      'app_block1_btn_download',
      'steps_title',
      'steps_description'
      ];

      for (let i = 0; i < tabClassFontToIncrease.length; i++) {
          let elementByClass = document.getElementsByClassName(tabClassFontToIncrease[i]);
          let style;
          let currentSize;
          for(let j=0; j < elementByClass.length; j++){
            style = window.getComputedStyle(elementByClass[j],null).getPropertyValue('font-size');
            currentSize = parseFloat(style);
            if(symbol=='+'){
              elementByClass[j].style.fontSize = (currentSize + 2) + 'px';
            }
            else{
              elementByClass[j].style.fontSize = (currentSize - 2) + 'px';
            }
          }
      }
    },

  },
};
</script>

<style>
.aroundTitle {
  border: 5px solid transparent;
  margin-left: 10px;
}
.aroundLogo {
  margin-top: 9px;
}
.arrowDropdown {
  margin-left: 5px;
}


/* Custom, iPhone Retina */ 

@media only screen and (min-width : 100px) {
  .btn-zoom-minus{
    margin-right:18%;
  }
}

@media only screen and (min-width : 320px) {
  .btn-zoom-minus{
    margin-right:15%;
  }
}

/* Extra Small Devices, Phones */ 
@media only screen and (min-width : 480px) {
  .btn-zoom-minus{
    margin-right:14%;
  }
}

@media only screen and (min-width : 600px) {
  .btn-zoom-minus{
    margin-right:14%;
  }
}

/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {
  .btn-zoom-minus{
    margin-right:10%;
  }
}

/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
  .btn-zoom-minus{
    margin-right:8%;
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
  .btn-zoom-minus{
    margin-right:6%;
  }

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1500px) {
  .btn-zoom-minus{
    margin-right:5%;
  }
}

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1750px) {
  .btn-zoom-minus{
    margin-right:4%;
  }
}

}
</style>