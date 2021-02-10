<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-4 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    <span v-if="isLogedIn && authUser.displayName" class="float-right mx-2">{{ authUser.displayName }}</span>
    <span v-if="isLogedIn && !authUser.displayName" class="float-right mx-2">{{ authUser.email }}</span>
    <img v-if="isLogedIn && authUser.photoURL" :src="authUser.photoURL"  width="50" height="50" class="lazy -mt-3 mx2 rounded float-right"/>
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
      photo: ''
    }
  },
  

}
</script>
