import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { ElMessage } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import useLoginStore from '@/store/login/login'

import 'normalize.css'
import '@/assets/css/index.less'

//全局引入  方便（但是占用空间太大）
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// app.use(ElementPlus)

const app = createApp(App)
app.use(pinia)
//因为一刷新路由就会丢失 所以每次刷新在这里加本地路由（重新设置路由）
const loginStore = useLoginStore()
loginStore.loadLocalRoutes()

app.use(router)
app.use(ElMessage)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
