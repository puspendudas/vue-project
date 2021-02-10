<template >
<div>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-4 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    
    <button v-if="!isLogedIn" @click="$emit('open-login-modal')" class="bg-green-300 text-white font-semibold rounded inline-flex items-center p-2 float-right mx-2 -my-2">Log In</button>
    <div v-if="isLogedIn" class="dropdown inline-block relative float-right text-left -my-2">
      <button class="bg-green-300 text-white font-semibold rounded inline-flex items-center">
        <img v-if="authUser.photoURL" :src="authUser.photoURL"  width="40" height="40" class="lazy mx2 rounded"/>
        <div class="">
          <span v-if="authUser.displayName" class="px-2 float-left">{{ authUser.displayName }}</span>
          <small v-if="authUser.displayName" class="px-2 ">{{ authUser.email }}</small>
        </div>
        <small v-if="!authUser.displayName" class="px-4 py-2">{{ authUser.email }}</small>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
      </button>
      <ul class="dropdown-menu float-right absolute hidden text-gray-700 pt-1">
        <li v-if="isLogedIn" @click="logout()" class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li>
      </ul>
    </div>
  </nav>
</div>
  
  <div
    class="relative inline-block text-left text-gray-800"
    v-on-clickaway="closeMenu"
  >
    <div>
      <span class="rounded-md shadow-sm">
        <button
          @click="isMenuOpen = !isMenuOpen"
          type="button"
          class="inline-flex items-center justify-between w-full rounded-md border border-gray-300 h-10 px-4 py-4 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-800 transition ease-in-out duration-150 btn-focus"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span> {{ label }} </span>
          <img
            src="https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=grey-800"
            class="-mr-1 ml-2 h-5 w-5"
          />
        </button>
      </span>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg text-sm overflow-hidden border z-20"
      >
        <div
          class="rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div>
            <div class="bg-gray-100 p-4 flex items-center">
              <div class="w-full">
                <img
                  class="h-8 w-8 rounded-full mb-2"
                  src="https://fayazz.co/fayaz.jpg"
                  alt="avatar"
                />
                <p class="font-semibold text-base">Fayaz Ahmed</p>
                <button
                  class="flex items-center justify-between w-full focus:outline-none"
                >
                  <p class="text-gray-600">fayaz@email.com</p>
                  <img
                    src="https://s.svgbox.net/hero-solid.svg?ic=cog&fill=grey-700"
                    class="h-4 w-4"
                  />
                </button>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <nuxt-link to="/" class="p-4 flex items-center space-x-2">
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=currency-rupee"
                class="h-6 w-6"
              />
              <span> Transaction History </span>
            </nuxt-link>
            <nuxt-link to="/" class="p-4 flex items-center space-x-2">
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=heart"
                class="h-6 w-6"
              />
              <span> Favourites </span>
            </nuxt-link>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="py-1">
            <nuxt-link
              to="/"
              @click="isMenuOpen = false"
              class="p-4 flex items-center space-x-2"
            >
              <img
                src="https://s.svgbox.net/hero-outline.svg?ic=logout"
                class="h-6 w-6"
              />
              <span> Logout </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </transition>
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