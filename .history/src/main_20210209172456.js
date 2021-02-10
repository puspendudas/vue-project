import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import router from './router'
import store from './store/index'

const app = createApp(App);
app.use(router);
app.use(Vuex);
app.mount('#app');
