import { createApp } from 'vue'
import App from './App.vue'
import { firebaseApp } from './firebase'
import router from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

const Pinia = createPinia()
const app = createApp(App).use(router)

app.use(Pinia)
app.use(firebaseApp)

app.mount('#app')