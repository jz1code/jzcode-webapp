import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './Problemset.vue'
// import router from '../../router'
// import store from '../../store'

createApp(App)
    .use(ElementPlus)
    // .use(store)
    // .use(router)
    .mount('#app')