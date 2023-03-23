<template>
  <div class="user-list">
    <el-table :data="userList" style="width: 100%">
      <el-table-column type="selection" width="60" />
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="name" label="用户名" width="120" />
      <el-table-column prop="realname" label="真实姓名" width="180" />
      <el-table-column prop="cellphone" label="手机号码" width="160" />
      <el-table-column prop="enable" label="状态" width="100" />
      <el-table-column prop="createAt" label="创建时间" />
      <el-table-column prop="updateAt" label="更新时间" />
      <el-table-column label="操作" width="180">
        <template #default>
          <el-button type="primary" link icon="Edit">编辑</el-button>
          <el-button type="danger" link icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
  
<script setup>
import useSystemStore from '@/store/main/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()
systemStore.fetchUserListAction()

const { userList } = storeToRefs(systemStore)
</script>
  
  
<style scoped lang="less">
.user-list {
  margin: 20px 0;
}

// ::v-deep .el-tabel-column {
//   text-align: center;
// }
:deep(.el-table__cell) {
  text-align: center;
  height: 60px;
}
</style>