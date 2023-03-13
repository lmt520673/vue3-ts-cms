<template>
  <div id="main">
    <h1>Main</h1>
    <button @click="handleExitBtn">退出登录</button>
    <!-- <h1>主页</h1>
    <h2>counter:{{ counterStore.count }}</h2>
    <h2>doubleCounter:{{ counterStore.doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button> -->
  </div>
</template>


<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

function handleExitBtn() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>


<style scoped>
.main {
  color: red;
}
</style>