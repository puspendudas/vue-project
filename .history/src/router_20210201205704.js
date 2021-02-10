import VueRouter from "vue-router";
import Home from "./component"
const routes =[
    {path: '/', component:Home},
]
const router = VueRouter.createRouter({
    routes
});
export default router;