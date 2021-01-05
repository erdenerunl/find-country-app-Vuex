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
            state.listedCountry = country
            console.log(state.listedCountry)
        }
    },
    actions: {
        getCountry( { commit }, country ){
            axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((response) => {
                commit('getCountry' , response.data)
            })
        }
    },
    getter : {
        countryList : (state) => state.listedCountry
    }
})
export default store