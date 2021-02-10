<template>
  <h1>Home</h1>
</template>

<script>
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore();
    const User = computed(() => store.state.authUser);
  }
}
</script>

<style>

</style>