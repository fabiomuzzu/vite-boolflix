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
  <header>
    <div class="container-fluid d-flex justify-content-between h-100 align-items-center">
      <div>
        <h1 class=" text-danger ">BoolFlix</h1>
      </div>
      <div>
        <!-- v-model indica dove mandare i dati dell'input, il keyup.enter crea l'emit alla pressione del tasto invio -->
        <input id="searchBar" v-model="store.searchInput" type="text" @keyup.enter="$emit('search_btn')" >
        <!-- emit lo utilizzo per il passaggio dell'informazione all'App.vue -->
        <button id="searchBtn" @click="$emit('search_btn')" >Search</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.84);
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.235);
  box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.235);


  h1{
    font-size: 50px;
    font-weight: 900;
  }

  #searchBar {
      background-color: transparent;
      color: white;
      box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.235);
      border: 1px solid rgba(128, 128, 128, 0.507);
      border-radius: 10px;
      padding: .25rem .5rem;
      margin-right: 1rem;
    }

    #searchBtn {
      color: rgba(255, 255, 255, 0.559);
      border: none;
      background-color: transparent;

      &:hover {
        color: rgba(255, 255, 255, 0.959);
        scale: 1.2;
        cursor: pointer;
      }
    }
}
</style>