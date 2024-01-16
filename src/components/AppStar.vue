<script>
export default {
    name: 'AppStar',

    data() {
        return {
            //Array da utilizzare per ciclare le i delle stelle 
          five: [1,2,3,4,5]  
        }
    },

    props: {
        // props per il passaggio del numero contenuto nel bind vote in AppMain
        vote: Number,
    },

    methods: {
        // Funzione per avere un voto complessivo da 1 a 5 (il voto dell'api va da 1 a 10)
        getStarVote(){
            return Math.round(this.vote / 2)
        }
    },
}
</script>

<template lang="">
    <!-- Creazione del ciclo v-for per printare il numero di elementi contenuti nell'array, in questo caso 5 elementi-->
    <!-- Creazione del bind :class per assegnare i colori alle stelle, per il numero minore o uguale alla funzione getStarVote assegno il colore oro, altrimenti il colore grigio-->
    <div>Voto: <i class="bi-star-fill" :class="item <= getStarVote() ? 'goldenStar' : 'grayStar'" v-for="(item, index) in five" :key="index" ></i></div>
</template>

<style lang="scss" scoped>
.goldenStar{
    color: goldenrod;
}
.grayStar{
    color: gray;
}
</style>