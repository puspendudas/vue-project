import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./component/Home.vue";
import Chat from "./component/Chat.vue";
import store
const routes =[
    {path: '/', component:Home},
    {path: '/home', component:Home},
    {path: '/chat', component:Chat, beforeEnter:()=>{}},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;