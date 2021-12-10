<template>
  <v-container justify="center">
    <div class="center mt-15">
      <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8">
          <v-card
            style="
              margin: 14% 14% 14% 14%;
              padding: 3%;
              background-color: #c5c8c9;
            "
          >
            <v-row justify="center">
              <v-col cols="8" sm="8" md="8" lg="8" xl="8">
                <v-card-title>
                  {{ $t("searchArticles") }}
                </v-card-title>
                <v-select
                  v-model="select"
                  :items="$t('articleFilters')"
                  item-text="value"
                  item-value="url"
                  label="Select"
                  persistent-hint
                  return-object
                  single-line
                  dense
                  outlined
                  color="white"
                ></v-select>
                <v-text-field
                  v-model="inputValue"
                  :placeholder="select.placeholder"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" style="margin-bottom: 3%">
              <v-col cols="4" sm="5" md="6" lg="6" xl="4">
                <v-btn v-on:click="getArticles" style="border-radius: 2%">{{
                  $t("searchArticles")
                }}</v-btn>
              </v-col>
            </v-row>
            <!--           <v-row justify="center">
              
            </v-row> -->

            <v-simple-table v-if="articles.length > 0">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t("titleTable") }}</th>
                    <th class="text-left">{{ $t("nameBoat") }}</th>
                    <th class="text-left">{{ $t("nameSaviour") }}</th>
                    <th class="text-left">{{ $t("photosLink") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in articles" :key="item.name">
                    <td>{{ item.title }}</td>
                    <td>{{ item.boat.name }}</td>
                    <td>
                      {{
                        item.saviours[0].firstname +
                        " " +
                        item.saviours[0].lastname
                      }}
                    </td>

                    <td>
                      <v-btn
                        color="black"
                        style="color: white"
                        :href="item.photos[0].url"
                        target="_blank"
                        >{{ $t("btnPhotoLabel") }}</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "articles",

  mounted() {},

  data() {
    return {
      select: { url: "by/boat/name", value: "", placeholder: "" },
      inputValue: "",
      articles: [],
    };
  },
  computed: {
    lang: function () {
      return this.$i18n.locale;
    },
  },
  methods: {
    getArticles: function () {
      axios
        .get(
          "https://crise-interstellaire-back-end.herokuapp.com/articles/" +
            this.select.url +
            "/" +
            this.inputValue
        )
        .then((response) => (this.articles = response.data));
    },
  },
  watch: {
    lang() {
      this.select.placeholder = "";
    },
  },
};
</script>

<style>
:root {
  --main-purple-color: black;
}
.stationsPageTitle {
  font-size: 25px;
  color: var(--main-purple-color);
}

.v-application .blue--text.text--darken-2 {
  color: var(--main-purple-color) !important;
  caret-color: var(--main-purple-color) !important;
}

#actionMenu {
  padding: 1rem;
  margin: 1rem;
}
</style>