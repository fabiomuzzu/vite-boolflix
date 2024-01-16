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
  <div>
    <h1>Films</h1>
    <ul>
      <li v-for="(item, index) in store.films" :key="index">
        <ul>
          <li>Nome: {{item.name}}</li>
          <li>Nome Originale: {{item.original_name}}</li>
          <li>Lingua: {{item.language}}</li>
          <li>Voto: {{item.vote}}</li>
        </ul>
      </li>
    </ul>
  </div>

  <div>
    <h1>Series</h1>
    <ul>
      <li v-for="(item, index) in store.series" :key="index">
        <ul>
          <li>Nome: {{item.name}}</li>
          <li>Nome Originale: {{item.original_name}}</li>
          <li>Lingua: {{item.language}}</li>
          <li>Voto: {{item.vote}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="">
  
</style>