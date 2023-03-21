<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header height="60px">
          <nav-header @handleCollapseChange="handleCollapseChange"></nav-header>
        </el-header>
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import NavMenu from '@/components/nav-menu/NavMenu.vue'
import NavHeader from '@/components/nav-header/NavHeader.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
function handleCollapseChange(isFold: boolean) {
  isCollapse.value = isFold
}
</script>


<style scoped lang="less">
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #304156;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    }
    // .main-content {
    //   background-color: rebeccapurple;
    // }
  }
}
</style>