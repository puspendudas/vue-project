<template>
  <h1>Home</h1>
</template>

<script>
export default {
  mounted(){
    console.log("Hello")
  console.log(this.vuex.store.state);
  }
}
</script>

<style>

</style>