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

    getFilm(){
      let apiUrl = `${store.apiSearchMovie}?api_key=${store.apiKey}&query=${store.searchInput}&language=${store.apiLanguage}`
      axios.get(apiUrl).then((response) =>{
        store.films = response.data.results;
        
      })
    }

  },
  created(){
    this.getFilm();
  },
}
</script>

<template lang="">
  {{store.films}}
  <AppHeader @doSearch="getSearch" />
  <AppMain />
</template>

<style lang="">
  
</style>