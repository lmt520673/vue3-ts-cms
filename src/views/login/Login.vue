<template>
  <div class="login">
    <div class="login-content">
      <h1 class="title">后台管理系统</h1>
      <div class="login-method">
        <el-tabs type="border-card" :stretch="true" v-model="activeName">
          <el-tab-pane name="account">
            <template #label>
              <div class="login-account">
                <el-icon size="14">
                  <UserFilled />
                </el-icon>
                <span class="text">帐号登录</span>
              </div>
            </template>
            <pane-account ref="paneAccountRef"></pane-account>
          </el-tab-pane>
          <el-tab-pane name="phone">
            <template #label>
              <div class="login-phone">
                <el-icon size="14">
                  <Iphone />
                </el-icon>
                <span class="text">手机登录</span>
              </div>
            </template>
            <pane-phone></pane-phone>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="psd-action">
        <div class="remember-psd">
          <el-checkbox v-model="isRememberPsd" label="记住密码" size="large" />
        </div>
        <div class="forget-psd">
          <el-link type="primary" size="large">忘记密码</el-link>
        </div>
      </div>
      <el-button class="login-button" type="primary" size="large" @click="handleLoginBtn">
        立即登录
      </el-button>
    </div>
  </div>
</template>


<script setup lang="ts">
import PaneAccount from './components/PaneAccount.vue'
import PanePhone from './components/PanePhone.vue'
import { ref, watch } from 'vue'
import { localCache } from '@/utils/cache'

const activeName = ref('account')

//是否记住密码
const isRememberPsd = ref<boolean>(localCache.getCache('isRememberPsd') ?? false)

watch(isRememberPsd, (newVal) => {
  localCache.setCache('isRememberPsd', newVal)
})
//拿到paneAccount的组件实例
const paneAccountRef = ref<InstanceType<typeof PaneAccount>>()
function handleLoginBtn() {
  if (activeName.value === 'account') {
    paneAccountRef.value?.login(isRememberPsd.value)
  } else {
    console.log('哈哈哈哈手机')
  }
}
</script>


<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('@/assets/imgs/login-bg.svg');
  .login-content {
    width: 330px;
    margin-bottom: 120px;
    .title {
      text-align: center;
      margin-bottom: 20px;
    }
    .login-method {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .login-account,
      .login-phone {
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
          margin-left: 6px;
        }
      }
    }
    .psd-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .login-button {
      width: 100%;
    }
  }
}
</style>