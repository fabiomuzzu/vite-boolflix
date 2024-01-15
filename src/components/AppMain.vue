<script>
import {store} from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
}
</script>

<template lang="">
  <div v-for="element in store.films">
    <p>{{ store.films.name }}</p>
    <p>{{ store.films.original_name }}</p>
    <p>{{ store.films.img }}</p>
    <p>{{ store.films.language }}</p>
    <p>{{ store.films.vote }}</p>
  </div>
</template>

<style lang="">
  
</style>