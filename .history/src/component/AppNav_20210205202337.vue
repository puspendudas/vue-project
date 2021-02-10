<template >
<div>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-4 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    
    <button v-if="!isLogedIn" @click="$emit('open-login-modal')" class="float-right mx-2">Log In</button>
    <div v-if="isLogedIn" class="dropdown inline-block relative float-right text-left ">
      <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-2 rounded inline-flex items-center">
        <img v-if="authUser.photoURL" :src="authUser.photoURL"  width="40" height="40" class="lazy mx2 rounded"/>
        <span v-if="authUser.displayName" class="px-2 float-left">{{ authUser.displayName }}</span>
        <small v-if="authUser.displayName" class="px-2 ">{{ authUser.email }}</small>
        <p v-if="!authUser.displayName" class="px-4 py-2">{{ authUser.email }}</p>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <li v-if="isLogedIn" @click="logout()" class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
</div>
  
  

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
      photo: '',
      isOn: false,
    }
  },
  

}
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>