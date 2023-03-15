<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="210px" class="main-aside">
        <div class="logo">
          <img src="@/assets/imgs/logo.svg" alt="" />
          <span class="title">宏源后台管理系统</span>
        </div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409eff"
        >
          <template v-for="subItem in menus">
            <el-sub-menu>
              <template #title>
                <el-icon> <component :is="subItem.meta.icon" /></el-icon>
                <span>{{ subItem.meta.title }}</span>
              </template>
              <template v-for="menuItem in subItem.children">
                <el-menu-item index="">
                  <template #title>
                    <span>{{ menuItem.meta.title }}</span>
                  </template>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
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
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

const loginStore = useLoginStore()

const menus = loginStore.userMenus

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
      .logo {
        text-align: center;
        height: 30px;
        img {
          height: 100%;
        }
        .title {
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          line-height: 30px;
          margin-left: 10px;
        }
      }
    }
    .main-header {
      background-color: aquamarine;
    }
    .main-content {
      background-color: rebeccapurple;
    }
  }
}

:deep(.el-menu--inline) {
  background-color: #1f2d3d;
}

// :deep(.el-submenu__title):hover {
//   background-color: #ff0000;
//   color: #fff;
// }

:deep(.el-menu-item):hover {
  background-color: #001528;
}
</style>