<template>
  <div class="col-lg-6 col-md-6 col-sm-12">
    <div class="card mb-3">
      <h3 class="card-header">{{ country.name }} - {{ country.alpha2Code }}</h3>
      <img :src="country.flag" class="d-block" max-width="100%" height="300" />
      <div class="card-body desc">
        <p class="card-text" style="min-height: 63px">{{ country.capital }} - {{country.region}} </p>
      </div>
      <div class="card-body">
        <a href="#" @click="$router.push(`/details/${country.id}`)" class="card-link">click for more...</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
};
</script>

<style>
</style>