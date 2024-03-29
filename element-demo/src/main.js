import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import Login from './components/user'
const app = createApp(App);
app.use(ElementPlus);
app.use(Login)
app.mount('#app')
