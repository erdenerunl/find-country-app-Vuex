<template>
  <div>
    <app-navbar />
    <search-country />
    <country-list />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import CountryList from './components/CountryList.vue'
import SearchCountry from './components/SearchCountry.vue'


export default {
  name: 'App',
  components: {
    AppNavbar,
    SearchCountry,
    CountryList
  }
}
</script>

<style>

</style>
