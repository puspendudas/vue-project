<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1>Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">{{chat.message}}</div>
        </div>
        <in
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
  });
  onMounted(async()=>{
    const db = firebase.database();
    const collection = db.ref("chats");
    const data =await collection.once("value");
    state.chats=data.val();
  });

  return { state }
}
}
</script>

<style>

</style>