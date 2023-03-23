<template>
  <div class="user-search">
    <el-form :model="queryParam" label-width="70px" label-position="right">
      <el-row :gutter="90">
        <el-col :span="8">
          <el-form-item label="用户名" size="large" prop="name">
            <el-input v-model="queryParam.name" placeholder="请输入查询的用户名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" size="large" prop="realname">
            <el-input v-model="queryParam.realname" placeholder="请输入查询的真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" size="large" prop="cellphone">
            <el-input v-model="queryParam.cellphone" placeholder="请输入查询的手机号码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" size="large">
            <el-select placeholder="请输入查询的用户名" style="width: 100%">
              <el-option label="启用" :value="1"></el-option>
              <el-option label="禁用" :value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" size="large">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="large"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="search-btn">
      <el-button size="default" icon="Refresh">重置</el-button>
      <el-button size="default" icon="Search" type="primary">查询</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const queryParam = reactive({
  name: '',
  realname: '',
  telphone: '',
  enabel: 1,
  creatAt: []
})
</script>


<style scoped lang="less">
.user-search {
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  .search-btn {
    text-align: right;
  }
}
</style>