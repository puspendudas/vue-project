<template>
  <AppNav @open-login-modal="isLoginOpen = true" @open-signup-modal="isSignUpOpen: true"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal @close-modal="isLoginOpen = false" v-if="isLoginOpen"/>
  <SignUpModal @close-signup-modal="isSignUpOpen: false" v-if="isSignUpOpen" />
</template>
<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
import SignUpModal from './component/SignUpModal'
export default {
  components: {AppNav, AppFooter, LoginModal, SignUpModal},
  data() {
    return {
      isLoginOpen: false,
      isSignUpOpen: false,
    }
  }
}
</script>

<style>

</style>
