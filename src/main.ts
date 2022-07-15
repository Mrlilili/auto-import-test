import { createApp } from 'vue'
import { setupRouter } from '@/router'
import App from './App.vue'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const setup = () => {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
setup()
