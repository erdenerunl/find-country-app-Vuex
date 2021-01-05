import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state(){
        return {
            searchedCountry : '',
            listedCountry : [],
            savedCountries : []
        }
    },
    mutations : {
        getCountry(state , country){
            state.listedCountry.push(...country)
            console.log(state.listedCountry)
        },
        addFavorite(state , favorited){
            state.savedCountries = {...favorited, saved: true}
            console.log(state.savedCountries)
        }
    },
    actions: {
        getCountry( { commit }, country ){
            axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((response) => {
                commit('getCountry' , response.data)
            }).catch(e => console.log(e))
        },
        addFavorite( {commit}, favorited ){
            axios.post('http://localhost:3000/favorites', favorited).then((response) => {
                commit('addFavorite', response.data)
            })
        }
    },
    getters : {
        countryList : (state) => state.listedCountry,
        savedCountries : (state) => state.savedCountries
    }
})
export default store