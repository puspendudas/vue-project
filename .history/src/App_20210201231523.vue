<template>
  <AppNav @open-login-modal="isLoginOpen = true"  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal @close-modal="isLoginOpen = false" v-if="isLoginOpen"/>
  <!-- <SignUpModal @close-signup-modal="isSignUpOpen: false" v-if="isSignUpOpen" /> -->
</template>
<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
//import SignUpModal from './component/SignUpModal'
import firebase from "../utilities/firebase";
export default {
  components: {AppNav, AppFooter, LoginModal},
  data() {
    return {
      isLoginOpen: false,
      isSignUpOpen: false,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
    } else {
      console.log("Not Use")
    }
    });
  }
}
</script>
<style>

</style>