<template>
  <h1>Home</h1>
</template>

<script>
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore();
  const UserId = computed(() => store.state.authUser.uid);
  }
}
</script>

<style>

</style>