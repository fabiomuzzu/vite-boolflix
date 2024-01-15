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
      let apiUrl = `${store.apiSearchMovie}?api_key=${store.apiKey}&query=s&language=${store.apiLanguage}`
      axios.get(apiUrl).then((response) =>{
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
    }

  },
  created(){
    this.getFilm();
  },
}
</script>

<template lang="">
  <AppHeader />
  <AppMain />
</template>

<style lang="">
  
</style>