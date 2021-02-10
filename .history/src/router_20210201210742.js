import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./component/Home.vue";
import Home from "./component/.vue";
const routes =[
    {path: '/home', component:Home},
    {path: '/page', component:Home},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;