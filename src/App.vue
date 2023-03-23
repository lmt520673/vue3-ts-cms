<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>



<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 确定环境的几种方式
// 方式一：手动注释：开发时注释生产环境的，打包时注释开发环境的（但是很有可能手误）
// export const API_BASE_URL = 'https://coderwhy/org/dev'
// export const API_BASE_URL = 'https://coderwhy/org/prod'

// 方式二:import.meta.env.MODE是vite中提供的，开发环境值是development，生产环境值是production
// let BASE_URL = ''
// if (import.meta.env.MODE === 'development') {
//   BASE_URL = '/dev'
//   console.log(import.meta.env.MODE)
// } else {
//   BASE_URL = '/pro'
//   console.log(import.meta.env.MODE)
// }

//方式三：在项目文件目录下新建.env.development 和 .env.production俩个文件   运行时会自动识别是开发环境还是生产环境
//要求必须要以VITE开头  添加的值会被放在import.meta.env中
// console.log(import.meta.env.VITE_BASE_URL)
</script>



<style scoped>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
