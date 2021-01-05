<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-8 wrapper bg-primary">
        <div class="form-group">
          <input type="text" @keydown.enter="getCountry($event.target.value)" class="form-control bg-secondary mt-3" placeholder="Search a country and press enter..." id="inputDefault" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods : {
        ...mapActions(['getCountry'])
    }
};
</script>

<style scoped>
.row {
    display: flex;
    justify-content: center;
}
</style>