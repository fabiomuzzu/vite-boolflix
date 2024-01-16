<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store.js';
import axios from 'axios';

export default {
  components:{
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getSearch(){
      this.getFilm(),
      this.getSeries()
    },

    getFilm(){
      let apiUrl = `${store.apiSearchMovie}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`
      axios.get(apiUrl).then((response) =>{
        store.films = response.data.results;
      })
    },

    getSeries(){
      let apiUrl = `${store.apiSearchTv}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`
      axios.get(apiUrl).then((response) =>{
        store.series = response.data.results;
      })
    },
  },
  created(){
    this.getSearch();
  },
}
</script>

<template lang="">
  <AppHeader @doSearch="getSearch" />
  <AppMain />
</template>

<style lang="">
  
</style>