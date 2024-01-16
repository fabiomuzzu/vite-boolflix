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
    <input v-model="store.searchInput" type="text" >
    <button @click="$emit('search_btn')">search</button>
  </div>
</template>

<style lang="scss">
  
</style>