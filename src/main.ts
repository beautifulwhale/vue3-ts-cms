import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'normalize.css'
import './assets/css/base.css'
import { globalRegister } from './global'
import { localLogin } from './store'
localLogin()
const app = createApp(App)
globalRegister(app)
app.use(router).use(store).mount('#app')
