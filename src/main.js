import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { firebaseApp } from './firebase'
import router from './router'

const app = createApp(App).use(router)

app.use(ElementPlus)
app.use(firebaseApp)

app.mount('#app')