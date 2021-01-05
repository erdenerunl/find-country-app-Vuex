<template>
  <div>
      <div class="container">
          <div class="row">
              <country-list-item v-for="country in savedCountries" :key="country.id" :countrList="country" />
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CountryListItem from '../components/CountryListItem.vue'
export default {
    components: {
        CountryListItem
    },
    computed : {
        ...mapGetters(['savedCountries'])
    }
}
</script>

<style>

</style>
