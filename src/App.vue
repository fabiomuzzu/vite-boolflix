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
      let apiUrlFilms = `${store.apiSearchMovie}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`
      let apiUrlSeries = `${store.apiSearchTv}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`

      axios.get(apiUrlFilms).then((response) => {
        let arr = response.data.results;
        
        arr.forEach(element => {
          let obj = {
            name: element.title,
            original_name: element.original_title,
            img: element.poster_path,
            language: element.original_language,
            vote: element.vote_average,
          }
          store.films.push(obj);
        });
      })
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
  <AppHeader @search_btn="getSearch" />
  <AppMain />
</template>

<style lang="">
  
</style>