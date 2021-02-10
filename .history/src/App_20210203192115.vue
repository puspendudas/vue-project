<template >
 <AppNav :isLogedIn="isLogedIn" :authUser="authUser" @open-login-modal="isLoginOpen = true"  />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <AppFooter/>
  <LoginModal @close-modal="isLoginOpen = false" v-if="isLoginOpen"/>
</template>
<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
import firebase from "./utilities/firebase";
export default {
  components: {AppNav, AppFooter, LoginModal},
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