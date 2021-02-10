<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
<AppFooter/>
<LoginModal />
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import AppFooter from './component'
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
