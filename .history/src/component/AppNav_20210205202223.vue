<template >
<div>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-4 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    
    <button v-if="!isLogedIn" @click="$emit('open-login-modal')" class="float-right mx-2">Log In</button>
    
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