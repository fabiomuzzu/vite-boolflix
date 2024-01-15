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
}
</script>

<template lang="">
  <AppHeader />
  <AppMain />
</template>

<style lang="">
  
</style>