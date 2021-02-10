import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./component/Home.vue";
import Chat from "./component/Chat.vue";
const routes =[
    {path: '/', component:Home},
    {path: '/home', component:Home},
    {path: '/chat', component:Chat before},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;