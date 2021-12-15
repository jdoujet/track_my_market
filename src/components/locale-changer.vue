<template>
  <div class="locale-changer" style="padding-top: 30px;">
    <v-container >
      <v-row >
        <v-col cols="5" sm="5" >
          <v-select
            :items="langs"
            item-text="name"
            v-model="$i18n.locale"
            color="black"
            solo
            outlined
           
          >
            <template v-slot:item="{ item }" >
              {{ item.fullname }}
              <country-flag :country="item.flag" />
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CountryFlag from "vue-country-flag";

export default {
  components: { CountryFlag },
  name: "locale-changer",
  data() {
    return {
      langs: [
        { name: "FR", fullname: "Français", flag: "fr" },
        { name: "EN", fullname: "English", flag: "gb" },
        { name: "DE", fullname: "Deutsch", flag: "de" },
      ],
    };
  },
};
</script>