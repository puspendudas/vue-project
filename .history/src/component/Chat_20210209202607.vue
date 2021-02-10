<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Chat</h1>
      <div class="border rounded-lg">
        <div v-if="UserId" class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message" class="w-full" :class="chat.userId === UserId ? 'text-right' : '' ">{{chat.message}}</div>
        </div>
        <div v-if="UserId" class="h-8 p-2">
          <input class="p-1 border rounded shadow" v-model="state.message" @keydown.enter="addMessage" placeholder="Start Typing...."/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {computed, onMounted, reactive} from "vue";
import {chatRef} from "../utilities/firebase";
import {useStore} from "vuex"
export default {
setup(){
  const state = reactive({
    chats:[],
    message: "",
  });

  const store = useStore();
  const UserId = computed(() => store.state.authUser.uid);

  onMounted(async () => {
    chatRef.on("child_added",(snapshot)=>{
      state.chats.push({key: snapshot.key, ...snapshot.val()});
    });
  });

  function addMessage(){
    const newChat = chatRef.push();
    console.log(UserId)
    newChat.set({ userId:UserId, message: state.message });
    state.message="";
  }

  return { state, addMessage, UserId }
}
}
</script>

<style>

</style>