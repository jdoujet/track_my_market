<template>
  <div>
    <!--app bar desktop-->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      style="background-color: #2f3a40; border-bottom: 1px solid #a6a6a6"
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
            data-icon="mdi:boat"
            height="30"
            width="30"
            style="color: #2f3a40"
          ></v-icon>
        </v-avatar>
      </v-avatar>
      <v-toolbar-title
        class="aroundTitle"
        v-t="'websiteTitle'"
        style="background-color: #2f3a40; color: white"
        @click="redirect('/image')"
      >
      </v-toolbar-title>

      <v-toolbar
        v-if="!isMobile"
        color="#2F3A40"
        style="box-shadow: none; border-bottom: 1px solid #a6a6a6"
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
    };
  },
  mounted() {
    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },

  methods: {
    redirect(to) {
      this.$router.push(to);
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
</style>