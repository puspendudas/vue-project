import { createRouter } from "vue-router";
import Home from "./component/Home.vue"
const routes =[
    {path: '/', component:Home},
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;