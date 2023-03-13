<template>
  <div class="pane-phone">
    <el-form
      ref="ruleFormRef"
      :model="phone"
      :rules="rules"
      label-width="66px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber" size="large" />
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <div class="verificationCode">
          <el-input v-model="phone.verificationCode" size="large" />
          <el-button class="verificationCode-btn" type="primary" size="large">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  
  <script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

//帐号和密码
const phone = reactive({
  phoneNumber: '',
  verificationCode: ''
})

//帐号和密码正则
const rules = reactive<FormRules>({
  phoneNumber: [
    { required: true, message: '手机号不能为空', trigger: 'blur' },
    {
      pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
      message: '请输入正确的手机号格式',
      trigger: 'blur'
    }
  ],
  verificationCode: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: '验证码必须是6位数字', trigger: 'blur' }
  ]
})
</script>
  
  
<style scoped lang="less">
.pane-phone {
  .verificationCode {
    display: flex;
    justify-content: space-between;
    .verificationCode-btn {
      margin-left: 10px;
    }
  }
}
</style>