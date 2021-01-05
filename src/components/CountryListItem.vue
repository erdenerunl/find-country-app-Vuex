<template>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-3">
    <div class="card mb-3">
      <h3 class="card-header">{{ country.name }} - {{ country.alpha2Code }}</h3>
      <img :src="country.flag" class="d-block" max-width="100%" height="200" />
      <div class="card-body desc text-center">
        <p class="card-text" style="min-height: 30px">{{ country.capital }} - {{country.region}} </p>
        <button v-if="!country.saved" @click="addFavorite(country)" class="btn btn-primary">Save Country</button>
        <button class="btn-btn-danger" v-if="country.saved">Delete</button>
      </div>
      <!-- <div class="card-body">
        <a href="#" @click="$router.push(`/details/${country.id}`)" class="card-link">click for more...</a>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ["country", "countryList"],
  methods: {
      ...mapActions(['addFavorite'])
  }
};
</script>

<style>
</style>