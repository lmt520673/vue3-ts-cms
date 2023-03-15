<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="210px" class="main-aside">
        <el-menu class="el-menu-vertical-demo">
          <el-sub-menu title="系统管理"> </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="40px" class="main-header">Header</el-header>
        <el-main class="main-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { localCache } from '@/utils/cache'

// function handleExitBtn() {
//   localCache.removeCache(LOGIN_TOKEN)
//   router.push('/login')
// }
</script>


<style scoped lang="less">
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .main-aside {
      // height: 100%;
      background-color: #304156;
    }
    .main-header {
      background-color: aquamarine;
    }
    .main-content {
      background-color: rebeccapurple;
    }
  }
}
</style>