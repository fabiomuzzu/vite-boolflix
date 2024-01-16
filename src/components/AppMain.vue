<script>
import {store} from '../store.js';
export default {
  
  data() {
    return {
      store,
    }
  },

  methods: {
    // Funzione che mi genera l'url della bandiera in base all'item language
    getFlag(language){
      // Inizializziamo la variabile urlImg
      let urlImg;
      // Utilizziamo lo switch per filtrare le bandiere sostituendo quelle non trovate
      switch (language) {
        case 'uk':
          urlImg = 'https://flagcdn.com/24x18/ua.png';
          break;
        case 'ja':
          urlImg = 'https://flagcdn.com/24x18/jp.png';
          break;
        case 'en':
          urlImg = 'https://flagcdn.com/24x18/gb.png';
          break;
        default:
          urlImg = `https://flagcdn.com/24x18/${language}.png`;
          break;
      }
      // Restiuisce la variabile url
      return urlImg;
    }
  }
}
</script>

<template lang="">
  <div class=" container-fluid ">
    <div>
      <h1>Films</h1>
      <ul class=" list-unstyled d-flex flex-wrap ">
        <!-- Ciclo v-for per recuperare i dati dall'array films-->
        <li  class=" my-card " v-for="(item, index) in store.films" :key="index">
          <!-- Baffi per print info dell'array -->
          <ul>
            <li>Nome: {{item.name}}</li>
            <li>Nome Originale: {{item.original_name}}</li>
            <li>Lingua: {{item.language}} <img :src="getFlag(item.language)" :alt="item.language"></li>
            <li>Voto: {{item.vote}}</li>
          </ul>
        </li>
      </ul>
    </div>
  
    <div>
      <h1>Series</h1>
      <ul class=" list-unstyled d-flex flex-wrap ">
        <!-- Ciclo v-for per recuperare i dati dall'array films-->
        <li class=" my-card " v-for="(item, index) in store.series" :key="index">
          <ul>
          <!-- Baffi per print info dell'array -->
            <li>Nome: {{item.name}}</li>
            <li>Nome Originale: {{item.original_name}}</li>
            <li>Lingua: {{item.language}} <img :src="getFlag(item.language)" :alt="item.language"> </li>
            <li>Voto: {{item.vote}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-card{
  width: calc(100% / 6);
  padding-bottom: 20px;
  border: 1px solid black;
}
</style>