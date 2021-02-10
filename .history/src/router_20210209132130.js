import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./component/Home.vue";
import Page from "./component/Page.vue";
const routes =[
    {path: '/', component:Home},
    {path: '/home', component:Home},
    {path: '/chat', component:Page},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;