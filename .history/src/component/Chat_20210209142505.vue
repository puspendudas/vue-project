<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">{{chat.message}}</div>
        </div>
        <div class="h-8 p-2">
          <input class="p-1 border rounded shadow" v-model="state.message" @keydown.enter="addMessage" placeholder="Start Typing...."/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {onMounted, reactive} from "vue";
import firebase from "../utilities/firebase";
export default {
setup(){
  const state = reactive({
    chats:{},
    message: "",
    collection : null
  });
  onMounted(async()=>{
    const db = firebase.database();
    state.collection = db.ref("chats");
    const data =await state.collection.once("value");
    state.chats=data.val();

    state.collection.on("value",(snapshot)=>{
      state.chats
    })
  });

  function addMessage(){

  }

  return { state, addMessage }
}
}
</script>

<style>

</style>