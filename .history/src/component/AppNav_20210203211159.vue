<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    <img src="authUser.photoUrl" width="50" height="50" class="lazy float-right"/>
    <span class="float-right mx-2">{{ authUser.displayName }}</span><span>{{ photo }}</span>
    <button v-if="!isLogedIn" @click="$emit('open-login-modal')" class="float-right mx-2">Log In</button>
    <button v-if="isLogedIn" @click="logout()" class="float-right mx-2">Log Out</button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props : { isLogedIn:Boolean, authUser:Object },
  methods:{
    logout(){
      firebase.auth().signOut();
    }
  },
  data(){
    return {
      photo: this.authUser.photoUrl
    }
  }

}
</script>
