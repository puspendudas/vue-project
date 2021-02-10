import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./component/Home.vue";
import Page from "./component/Page.vue";
const routes =[
    {path: '/home', component:Home},
    {path: '/home', component:Home},
    {path: '/page', component:Page},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;