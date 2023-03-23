<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="@/assets/imgs/logo.svg" alt="" />
      <span class="title" v-if="!isCollapse">宏源后台管理系统</span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#bfcbd9"
      :collapse="isCollapse"
      :default-active="defaultActive + ''"
    >
      <template v-for="subItem in userMenus">
        <el-sub-menu :index="subItem.id + ''">
          <template #title>
            <el-icon> <component :is="subItem.icon.split('-icon-')[1]" /></el-icon>
            <span>{{ subItem.name }}</span>
          </template>
          <template v-for="menuItem in subItem.children">
            <el-menu-item :index="menuItem.id + ''" @click="handleMenuItemClick(menuItem)">
              <template #title>
                <span>{{ menuItem.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>


<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { getMenuIdByUserMenus } from '@/utils/menus-map'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

//拿到用户菜单进行遍历
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

//定义是否折叠
defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
    required: true
  }
})

//点击路由进行跳转
function handleMenuItemClick(menuItem: any) {
  router.push(menuItem.url)
}

//设置菜单的选中项
const route = useRoute()
const defaultActive = computed(() => {
  return getMenuIdByUserMenus(userMenus, route.path)
})
</script>


<style scoped lang="less">
.nav-menu {
  background-color: #304156;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    margin-top: 6px;
    img {
      height: 100%;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
      color: #fff;
      margin-left: 10px;
    }
  }
  .el-menu-vertical-demo {
    margin-top: 14px;
  }
}

:deep(.el-menu--inline) {
  background-color: #1f2d3d;
}

:deep(.el-menu-item):hover {
  background-color: #001528;
}

.el-menu-item.is-active {
  background-color: #409eff;
  color: #fff;
}
</style>