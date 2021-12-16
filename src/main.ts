import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'normalize.css'
import './assets/css/base.css'
import { globalRegister } from './global'
import { localLogin } from './store'
const app = createApp(App)
globalRegister(app)
localLogin()
app.use(router).use(store)
app.mount('#app')
