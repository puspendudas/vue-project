<template>
  <AppNav @open-login-modal="isLoginOpen = true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal  v-if="isLoginOpen"/>
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
export default {
  components: {AppNav, AppFooter, LoginModal},
  data() {
    return {
      isLoginOpen: false,
    }
  }
}
</script>

<style>

</style>
