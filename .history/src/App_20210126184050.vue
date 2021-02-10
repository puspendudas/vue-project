<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
  
</template>

<script>
import AppNav from './component/AppNav'
import AppNav from './component/AppFooter'
export default {
  components: {AppNav, AppFooter},
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
