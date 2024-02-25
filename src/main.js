// import './assets/fonts/font-awesome.css'
// import './assets/fonts/elegant-fonts.css'
// import './assets/css/style.css'
// import './assets/css/custom1002.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
