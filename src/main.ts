import 'virtual:uno.css'
import 'ant-design-vue/dist/reset.css'
import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import antd from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(antd)

app.mount('#app')
