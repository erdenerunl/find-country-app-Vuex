<template>
  <div>
      <div class="container">
          <div class="row">
              <country-list-item v-for="country in countryList" :key="country.id" :country="country" />
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CountryListItem from '@/components/CountryListItem'
export default {
    components : {
        CountryListItem
    },
    computed : {
        ...mapGetters(['countryList'])
    }
}
</script>

<style>

</style>