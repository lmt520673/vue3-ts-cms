<template>
  <div class="pane-account">
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="rules"
      label-width="66px"
      class="demo-ruleForm"
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" size="large" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" size="large" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
  
  
  <script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, ElForm } from 'element-plus'
import type { ILoginAccount } from '@/types'
import useLoginStore from '@/store/login/login.js'
import { localCache } from '@/utils/cache'

const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT'

// 1.定义account数据
const account = reactive<ILoginAccount>({
  name: localCache.getCache(LOGIN_ACCOUNT)?.name ?? '',
  password: localCache.getCache(LOGIN_ACCOUNT)?.password ?? ''
})

// 2.定义校验规则
const rules: FormRules = {
  name: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: /^[0-9A-Za-z]{6,20}$/, message: '用户名长度需在6~20位之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { pattern: /^[0-9]{3,}$/, message: '密码必须是3位以上数字', trigger: 'blur' }
  ]
}

// 3.执行帐号的登录逻辑
//3.1获取el-form的表单实例（为了校验）
const ruleFormRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAction(isRememberPsd: boolean) {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      // 3.2.获取用户输入的帐号和密码
      const { name, password } = account
      // 3.3.向服务器发送网络请求(携带账号和密码)
      loginStore.loginAction({ name, password }).then((res) => {
        if (isRememberPsd) {
          localCache.setCache(LOGIN_ACCOUNT, {
            name,
            password
          })
        } else {
          localCache.removeCache(LOGIN_ACCOUNT)
        }
      })
    } else {
      ElMessage.error('请输入正确的格式之后再进行登录')
    }
  })
}

defineExpose({
  loginAction
})
</script>
  
  
<style scoped lang="less">
</style>