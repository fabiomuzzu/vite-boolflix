<script>
import {store} from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    
    
  }
}
</script>

<template lang="">
  <div class="container-fluid">
    <h1>BoolFlix</h1>
    <!-- v-model indica dove mandare i dati dell'input -->
    <input v-model="store.searchInput" type="text" >
    <!-- emit lo utilizzo per il passaggio dell'informazione all'App.vue -->
    <button @click="$emit('search_btn')">search</button>
  </div>
</template>

<style lang="scss">
  
</style>