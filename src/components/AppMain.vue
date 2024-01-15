<script>
import {store} from '../store.js';
export default {
  props: {
    films: Object
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template lang="">
  <div>
    <h2>{{film.name}}</h2>
  </div>
</template>

<style lang="">
  
</style>