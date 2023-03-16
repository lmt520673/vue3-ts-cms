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
    >
      <template v-for="subItem in menus">
        <el-sub-menu :index="subItem.name">
          <template #title>
            <el-icon> <component :is="subItem.meta.icon" /></el-icon>
            <span>{{ subItem.meta.title }}</span>
          </template>
          <template v-for="menuItem in subItem.children">
            <el-menu-item :index="menuItem.name">
              <template #title>
                <span>{{ menuItem.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>


<script setup lang="ts">
import useLoginStore from '@/store/login/login'
const loginStore = useLoginStore()
const menus = loginStore.userMenus

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
    required: true
  }
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