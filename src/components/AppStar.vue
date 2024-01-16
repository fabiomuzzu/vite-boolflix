<script>
export default {
    name: 'AppStar',

    data() {
        return {
          five: [1,2,3,4,5]  
        }
    },

    props: {
        vote: Number,
    },

    methods: {
        getStarVote(){
            return Math.round(this.vote / 2)
        }
    },
}
</script>

<template lang="">
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