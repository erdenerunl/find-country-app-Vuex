<template>
  <div>
   <div class="app-header bg-primary text-center">
       <h1>Find Country App</h1>
       <router-link to="/" >Home</router-link>
       <router-link to="/favorites" >Favorites</router-link>
   </div>
  </div>
</template>
 
<script>

</script>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85px;
}
h1 {
    color: #fff;
}
</style>