<script>
import {store} from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    
    doSearch(){
      this.$emit('search', store.searchInput)
    }
    
  },
}
</script>

<template lang="">
  <h1>BoolFlix</h1>
  <input v-model="store.searchInput" type="text" name="searchBar" @keyup.enter="doSearch">
  <button @click="doSearch">search</button>
</template>

<style lang="">
  
</style>