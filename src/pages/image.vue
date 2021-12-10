<template>
  <v-container justify="center">
    <v-row style="color: white; margin-top: 10%">
      <v-col>
        <v-text>Challenge : Christmas Egg (Click on the Image ! )</v-text>
      </v-col>
      <v-col>
        <v-img :src="adrImage" @click="red()" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "image",
  data() {
    return {
      i: 1,
    };
  },
  computed: {
    adrImage: function () {
      return "/migrant" + this.i + ".jpg";
    },
  },
  methods: {
    red() {
      this.i++;
      if (this.i === 5) {
        this.redirect("/");
      }
    },
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
</style>