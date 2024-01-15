<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  components:{
    AppHeader,
    AppMain,
  },
  data() {
    return {
      apiUrl: 'af89f0fc13519d9248e1074e9f7fa671',
    }
  },
  methods: {
    getFilm(text){
      axios.get('https://api.themoviedb.org/3/search/movie'),{
        params: {
          query: 'a',
          page: 1,
        }
      }
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