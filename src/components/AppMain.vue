<script>
import {store} from '../store.js';
import AppStar from './AppStar.vue';
export default {
  components: {
    AppStar
  },
  
  data() {
    return {
      store,
    }
  },

  methods: {
    getImg(image){

      return `${store.apiImg}${image}`
    },

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
      <div class="d-flex flex-wrap ">
        <!-- Ciclo v-for per recuperare i dati dall'array films-->
        <div  class=" my-card " v-for="(item, index) in store.films" :key="index">
          <!-- Baffi per print info dell'array -->
          <div class="front">
            <img class="" :src="item.img ? `${getImg(item.img)}` : 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'" alt="">
          </div>
          <div class="back">
            <div>Nome: {{item.name}}</div>
            <div>Nome Originale: {{item.original_name}}</div>
            <div>Lingua: <img :src="getFlag(item.language)" :alt="item.language"></div>
            <AppStar :vote="item.vote"/>
          </div>
        </div>
      </div>
    </div>
  
    <div>
      <h1>Series</h1>
      <div class=" list-unstyled d-flex flex-wrap ">
        <!-- Ciclo v-for per recuperare i dati dall'array films-->
        <div class=" my-card " v-for="(item, index) in store.series" :key="index">
          <!-- Baffi per print info dell'array -->
          <div class="front">
            <img class="" :src="item.img ? `${getImg(item.img)}` : 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'" alt="" >
          </div>
          <div class="back">
            <div>Nome: {{item.name}}</div>
            <div>Nome Originale: {{item.original_name}}</div>
            <div>Lingua: <img :src="getFlag(item.language)" :alt="item.language"> </div>
            <AppStar :vote="item.vote"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my-card{
  width: calc(100% / 6 - 20px);
  padding-bottom: 20px;
  border: 1px solid black;
  margin: 10px;
  .front{
    img{
      width: 100%;
      height: 500px;
    }
  }

  .back{
  }
}
</style>