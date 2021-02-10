<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
<Home />
<AppFooter/>
<LoginModal/>
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
import Home from './pages/home.vue'
export default {
  components: {AppNav, AppFooter, LoginModal,Home},
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
