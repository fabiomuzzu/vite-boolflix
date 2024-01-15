import {reactive} from 'vue';
export const store = reactive ({
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    apiKey: 'af89f0fc13519d9248e1074e9f7fa671',
    apiLanguage: 'it-IT',
    searchInput: '',
    films: [],
})