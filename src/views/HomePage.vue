<template>
  <div>
      <search-country />
      <country-list />
  </div>
</template>

<script>
import SearchCountry from '../components/SearchCountry.vue'
import CountryList from '../components/CountryList.vue'
export default {
    components : {
        CountryList,
        SearchCountry
    }
}
</script>

<style>

</style>
CountryListItem