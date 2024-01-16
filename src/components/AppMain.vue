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
      // Funzione che mi unisce l'url "inziale" dell'api al path "finale" delle immagini
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
  <main>

    <div class=" container-fluid ">
      <div>
        <div class="d-flex justify-content-center ">
          <h1>Films</h1>
        </div>
        <div class="my-container d-flex flex-wrap">
          <!-- Ciclo v-for per recuperare i dati dall'array films-->
          <div  class=" my-card " v-for="(item, index) in store.films" :key="index">
            <!-- Baffi per print info dell'array -->
            <div class="front">
              <!-- Utilizzo del bind :src per il passaggio di item.img alla funzione getImg, se link dell'immagine è presente utilizzare quello, altrimenti utilizzare altro link  -->
              <img class="frontImg" :src="item.img ? `${getImg(item.img)}` : 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'" alt="">
            </div>
            <div class="back">
              <div class="text-center">
                <div>
                  Nome:
                </div>
                {{item.name}}
              </div>
              <div class="text-center">
                <div>
                  Nome Originale: 
                </div>
                {{item.original_name}}
              </div>
              <!-- Utilizzo del bind :src per passaggio di item.language alla funzione getFlag -->
              <div>Lingua: <img :src="getFlag(item.language)" :alt="item.language"></div>
              <AppStar :vote="item.vote"/>
            </div>
          </div>
        </div>
      </div>
    
      <div>
        <div class="d-flex justify-content-center ">
          <h1>Series</h1>
        </div>
        <div class="my-container d-flex flex-wrap">
          <!-- Ciclo v-for per recuperare i dati dall'array films-->
          <div class=" my-card " v-for="(item, index) in store.series" :key="index">
            <!-- Baffi per print info dell'array -->
            <div class="front">
              <img class="frontImg" :src="item.img ? `${getImg(item.img)}` : 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'" alt="" >
            </div>
            <div class="back">
              <div class="text-center">
                <div>
                  Nome:
                </div>
                {{item.name}}
              </div>
              <div class="text-center">
                <div>
                  Nome Originale: 
                </div>
                {{item.original_name}}
              </div>
              <div>Lingua: <img :src="getFlag(item.language)" :alt="item.language"> </div>
              <!-- Inserimento scheda per visualizzazione del voto -->
              <AppStar :vote="item.vote"/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main{
  color: white;
  background-color: rgba(0, 0, 0, 0.84);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.235);
  box-shadow: inset 0 0 20px 10px rgba(138, 138, 138, 0.235);
}
.my-container{
  
  .my-card{
    width: calc(100% / 6 - 20px);
    height: 600px;
    padding-bottom: 20px;
    margin: 10px;
    position: relative;
    transition: 1500ms;
    transform-style: preserve-3d;
    

    .front, 
    .back{
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
      position: absolute;
      backface-visibility: hidden;
    }
    
    .back{
      background-color: #3a3a3a;
      color: white;
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
    }
    .frontImg{
      width: 100%;
      height: 100%;
      border-radius: 2rem;
    }
  }
  .my-card:hover{
    cursor: pointer;
    transform: rotateY(180deg);
  }
}
</style>