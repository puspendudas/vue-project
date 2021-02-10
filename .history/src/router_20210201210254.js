import { createRouter } from "vue-router";
import Home from "./component/Home.vue"
const routes =[
    {path: '/', component:Home},
]
const router = VueRouter.createRouter({
    routes
});
export default router;