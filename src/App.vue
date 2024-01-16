<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {

    getSearch() {
      // Reset dell'array di film e serie
      store.films = [];
      store.series = [];

      // Variabili che creano l'url dall'API
      let apiUrlFilms = `${store.apiSearchMovie}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`
      let apiUrlSeries = `${store.apiSearchTv}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`

      // Chiamata url films
      axios.get(apiUrlFilms).then((response) => {
        let arr = response.data.results;

        // Creazione oggetto prendendo i dati dall'array dell'api
        arr.forEach(element => {
          let obj = {
            name: element.title,
            original_name: element.original_title,
            img: element.poster_path,
            language: element.original_language,
            vote: element.vote_average,
          }
          // Push dell'obj nell'array vuoto films
          store.films.push(obj);
        });
      })
      // Chiamata url series
      axios.get(apiUrlSeries).then((response) => {
        let arr = response.data.results;

        arr.forEach(element => {
          let obj = {
            name: element.name,
            original_name: element.original_name,
            img: element.poster_path,
            language: element.original_language,
            vote: element.vote_average,
          }

          // Push dell'obj nell'array vuoto series
          store.series.push(obj);
        });
      })
      console.log(store.series);
      console.log(store.films);
    },

  },
  created() {

  },
}
</script>

<template lang="">
  <!-- Recupero dell'emit da AppHeader e lo reindirizzo alla funzione getSearch per filtrare risultati -->
  <AppHeader @search_btn="getSearch" />
  <AppMain />
</template>

<style lang="scss" >
@use './style/generals.scss' as *;
</style>