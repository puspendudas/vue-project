<template >
<div>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-4 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/chat" class="mx-2">Chat</router-link>
    
    <button v-if="!store.isLogedIn" @click="$emit('open-login-modal')" class="bg-green-300 text-white font-semibold rounded inline-flex items-center p-2 float-right mx-2 -my-2">Log In</button>
    <button v-if="store.isLogedIn" @click="logout()" class="bg-green-300 text-white font-semibold rounded inline-flex items-center p-2 float-right mx-2 -my-2">Log Out</button>
  </nav>
</div>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  methods:{
    logout(){
      firebase.auth().signOut();
    }
  },
  data(){
    return {
      photo: '',
      isOn: false,
      store: this.$store.state
    }
  },
  

}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>