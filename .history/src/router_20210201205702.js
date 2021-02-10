import VueRouter from "vue-router";
import Home from "./"
const routes =[
    {path: '/', component:Home},
]
const router = VueRouter.createRouter({
    routes
});
export default router;