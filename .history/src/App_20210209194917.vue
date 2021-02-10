<template >
 <AppNav @open-login-modal="isLoginOpen = true"  />
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
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLogedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLogedIn", false);
        this.$store.commit("setAuthUser", );
      }
    });
  }
}
</script>
<style>

</style>