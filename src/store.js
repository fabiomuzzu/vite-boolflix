import {reactive} from 'vue';
export const store = reactive ({
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    apiSearchTv: 'https://api.themoviedb.org/3/search/tv',
    apiKey: 'af89f0fc13519d9248e1074e9f7fa671',
    apiImg: 'https://image.tmdb.org/t/p/w500',
    apiLanguage: 'it-IT',
    searchInput: '',
    films: [],
    series: [],
})