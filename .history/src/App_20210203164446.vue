<template >
<div :isSignUpOpen="" @open-signup-modal="isSignUpOpen = true">
 <AppNav :isLogedIn="isLogedIn" @open-login-modal="isLoginOpen = true"  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal @close-modal="isLoginOpen = false" v-if="isLoginOpen"/>
  <SignUpModal @open-signup-modal="isSignUpOpen: false" v-if="isSignUpOpen" />
</div>
</template>
<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
import SignUpModal from './component/SignUpModal'
import firebase from "./utilities/firebase";
export default {
  components: {AppNav, AppFooter, LoginModal, SignUpModal},
  data() {
    return {
      isLoginOpen: false,
      isSignUpOpen: false,
      isLogedIn: false,
      authUser: {}
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLogedIn = true;
        this.authUser = user;
      } else {
        this.isLogedIn=false;
        this.authUser = {};
      }
    });
  }
}
</script>
<style>

</style>