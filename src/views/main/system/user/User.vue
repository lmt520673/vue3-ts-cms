<template>
  <div class="user">
    <user-search></user-search>
    <div class="content">
      <div class="content-header">
        <div class="title">用户列表</div>
        <el-button type="primary" icon="Plus">新建用户</el-button>
      </div>
      <user-list></user-list>
    </div>
  </div>
</template>
    
<script setup>
import UserSearch from './components/UserSearch.vue'
import UserList from './components/UserList.vue'
</script>
    
<style lang="less" scoped>
.user {
  .content {
    background-color: #fff;
    margin-top: 20px;
    border-radius: 8px;
    padding: 20px;
    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>