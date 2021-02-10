<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    <button @click="$emit('open-login-modal')" class="mx-2">Log In</button>
    <button @click="logout()" class="mx-2">Log Out</button>
    <!-- <button @click="$emit('open-signup-modal')" class="mx-2">Sign Up</button> -->
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  methods:{
    logout(){
      firebase.auth().signOut().then((res) => {
        // Sign-out successful.
        console.log("")
      }).catch((e) => {
        // An error happened.
      });
    }
  }

}
</script>
