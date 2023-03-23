<template>
  <div class="user-list">
    <el-table :data="systemStore.UserList" style="width: 100%">
      <el-table-column prop="date" label="用户名" width="180" />
      <el-table-column prop="name" label="真实姓名" width="180" />
      <el-table-column prop="address" label="手机号码" />
      <el-table-column prop="address" label="状态" />
      <el-table-column prop="address" label="创建时间" />
      <el-table-column prop="address" label="更新时间" />
    </el-table>
  </div>
</template>
  
  <script setup>
import useSystemStore from '@/store/main/system'
const systemStore = useSystemStore()
systemStore.fetchUserListAction()
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
  
  
  <style scoped lang="less">
</style>