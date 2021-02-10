<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
<AppFooter/>
<
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
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
