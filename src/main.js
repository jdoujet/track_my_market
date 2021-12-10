import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n';
import VueApexCharts from 'vue-apexcharts';
import '@/plugins/apexcharts';
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { LMap, LTileLayer, LMarker, LPolyline, LPopup } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';



//import NavBarSideBar from "@/components/NavBarSideBar";

import accueil from "@/pages/accueil";
import articles from "@/pages/articles";
import image from "@/pages/image";

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueI18n)

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: accueil},
    {path: '/image', component: image},
    {path: '/articles', component: articles}
  ]

});

Vue.component('apexchart', VueApexCharts)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

//defining text for both language french and english
const messages = {
  fr: {
    menuHome: 'Accueil',
    menuCrudStation : 'Articles',
    websiteTitle: 'Sauveteurs du dunkerquois',
    searchArticles : 'Rechercher les articles',
    articleFilters: [
      { url: "by/boat/name", value: "Par bateau", placeholder: "Entrer un nom de bateau" },
      { url: "by/title", value: "Par titre",placeholder:"Entrer le titre d'un article" },
      { url: "by/savior/name", value: "Par sauveteur", placeholder:"Entrer un nom de sauveteur" },
      
    ],
    searchBox_title:'Rechercher par ',
    titleTable:'Titre de l\'article',
    nameBoat:'Nom du bateau',
    nameSaviour:'Nom du sauveur',
    photosLink:'URL de la photo',
    btnPhotoLabel: 'Voir la photo',
    texteHeader: '« L\'espoir est au combattant de la liberté ce que la bouée de sauvetage est au nageur : la garantie qu\'il ne se noiera pas, qu\'il restera à l\'abri du danger. » \
    Biographie de Nelson Mandela',
    texteAccueil:'Dunkerque est une commune française, c’est la cinquième ville la plus peuplée de la région Hauts-de-France, ses habitants sont appelés les Dunkerquois et les Dunkerquoises.\
    L\'histoire de Dunkerque est liée à la mer du Nord. La ville se développa autour de son port. Par sa position, elle suscita de nombreuses convoitises. Le 25 juin 1658, elle changea trois fois de nationalité et devint définitivement française le 27 octobre 1662.\
    Les sauveteurs du Dunkerquois recensent les sauvetages en mer depuis 1740. Des sauvetages sont effectués à travers le monde auprès de bateaux en détresse.\
    Notre site regroupe un onglet de recherche permettant de trouver des personnes sauvées, des sauveteurs et des bateaux sauveteurs.'
  },
  en: {
    menuHome: 'Home',
    menuCrudStation : 'Stations',
    websiteTitle: 'Rescuers from Dunkirk',
    searchArticles : 'Search articles',
    articleFilters: [
      { url: "by/boat/name", value: "By boat", placeholder:"Search a boat name" },
      { url: "by/title", value: "By title", placeholder:"Search an article title" },
      { url: "by/savior/name", value: "By savior", placeholder:"Search a savior name" },
    ],
    searchBox_title:'Search by',
    titleTable:'Article title',
    nameBoat:'Boat\'s name',
    nameSaviour:'Saviour\'s name',
    photosLink:'Photo\'s URL',
    btnPhotoLabel: 'See the picture',
    texteHeader: '“Hope is to the freedom fighter what the lifeline is to the swimmer: the guarantee that he will not drown, that he will stay safe from harm. "\
    Biography of Nelson Mandela',
    texteAccueil:'Dunkirk is a French commune, it is the fifth most populous city in the Hauts-de-France region, its inhabitants are called the Dunkirk and the Dunkirk.\
    The history of Dunkirk is linked to the North Sea. The city developed around its port. By its position, it aroused much envy. On June 25, 1658, she changed her nationality three times and became definitively French on October 27, 1662.\
    Rescuers from Dunkirk have recorded rescues at sea since 1740. Rescues are carried out across the world from boats in distress.\
    Our site includes a search tab to find rescued people, rescuers and rescue boats.\
    '
  },
  de: {
    menuHome: 'Startseite',
    menuCrudStation : 'Jahreszeiten',
    websiteTitle: 'Retter aus Dünkirchen',
    searchArticles : 'Artikel suchen',
    articleFilters: [
      { url: "by/boat/name", value: "Mit dem Schiff", placeholder:"Geben Sie einen Bootsnamen ein" },
      { url: "by/title", value: "Nach Titel", placeholder:"Geben Sie einen Artikeltitel ein " },
      { url: "by/savior/name", value: "Von Rettungsschwimmer", placeholder:"Geben Sie einen Rettungsschwimmernamen ein" },
    ],
    searchBox_title:'Suche nach',
    titleTable:'Artikeltitel',
    nameBoat:'Bootsnamen',
    nameSaviour:'Rettungsschwimmernamen',
    photosLink:'URL-Foto',
    btnPhotoLabel: 'Sehen das Foto',
    texteHeader: '“Hoop is voor de vrijheidsstrijder wat de reddingslijn is voor de zwemmer: de garantie dat hij niet zal verdrinken, dat hij gevrijwaard blijft van kwaad. "\
    Biografie van Nelson Mandela',
    texteAccueil: 'Duinkerken is een Franse gemeente, het is de vijfde meest bevolkte stad in de regio Hauts-de-France, de inwoners worden Duinkerken en Duinkerken genoemd.\
    De geschiedenis van Duinkerken is verbonden met de Noordzee. De stad ontwikkelde zich rond de haven. Door zijn positie wekte het veel afgunst. Op 25 juni 1658 veranderde ze drie keer van nationaliteit en werd op 27 oktober 1662 definitief Frans.\
    De reddingswerkers van Duinkerken hebben sinds 1740 reddingen op zee geregistreerd. Reddingen worden over de hele wereld uitgevoerd vanaf boten in nood.\
    Onze site bevat een zoektab om geredde mensen, reddingswerkers en reddingsboten te vinden.'
  },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'fr',
  messages,
})
Vue.component('l-popup', LPopup);
Vue.component('l-polyline', LPolyline);


new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
