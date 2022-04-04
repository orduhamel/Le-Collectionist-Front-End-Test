import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index.js'
import './index.css'

const app = createApp(App)

app.
  use(createPinia()).
  use(router).
  mount('#app')
