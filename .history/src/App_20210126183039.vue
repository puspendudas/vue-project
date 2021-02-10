<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
</template>

<script>
export default {
  components: {AppNav},
  name: 'App',
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style>

</style>
