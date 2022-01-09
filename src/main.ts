import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { install } from './directive';
import App from './App.vue'

const app = createApp(App)
install(app)
app.use(ElementPlus)
app.mount('#app')

