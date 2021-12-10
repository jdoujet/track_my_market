<template>
  <div id="main">
    <v-container>
      <div class="center mt-15" style="background-color: black">
        <v-card>
          <v-img src="/banderole.png"> </v-img>
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
</style>


