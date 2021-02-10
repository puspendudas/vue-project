<template>
  <AppNav @open-login-modal="isLoginOpen = false"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal v-if="isOpen"/>
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
export default {
  components: {AppNav, AppFooter, LoginModal},
  data() {
    return {
      isOpen: true,
    }
  }
}
</script>

<style>

</style>
