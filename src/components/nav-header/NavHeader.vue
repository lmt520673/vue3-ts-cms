<template>
  <div class="nav-header">
    <div class="header-icon" @click="handleCollapse">
      <el-icon size="24">
        <component :is="isFold ? 'expand' : 'fold'"></component>
      </el-icon>
    </div>
    <div class="header-right">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="user-info">
        <div class="info-icon">
          <span class="bell">
            <span class="dot"></span>
            <el-icon size="20"><Bell /></el-icon>
          </span>
          <span>
            <el-icon size="20"><ChatDotRound /></el-icon>
          </span>
          <span>
            <el-icon size="20"><Postcard /></el-icon>
          </span>
        </div>
        <div class="info-dropdown">
          <el-dropdown>
            <span class="info-avatar">
              <el-avatar :size="30" src="@/assets/imgs/logo.svg" />
              <span>{{ loginStore.userInfo.name }}</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="dialogVisible = true">
                  <el-icon><CircleClose /></el-icon>
                  <span>退出系统</span>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-icon><InfoFilled /></el-icon>
                  <span>个人信息</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-icon><Lock /></el-icon>
                  <span>修改密码</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="提示" width="30%">
      <!-- <template #default> -->
      <div class="dialog-content">
        <el-icon color="#ffba00" size="30"><WarningFilled /></el-icon>
        <span>确定注销并退出系统吗？</span>
      </div>
      <!-- </template> -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>


<script setup lang="ts">
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'
import { ref } from 'vue'

const isFold = ref(false)

const emit = defineEmits(['handleCollapseChange'])

function handleCollapse() {
  isFold.value = !isFold.value
  emit('handleCollapseChange', isFold.value)
}

const loginStore = useLoginStore()

const dialogVisible = ref(false)

//退出登录逻辑
function handleConfirm() {
  localCache.removeCache(LOGIN_TOKEN)
  localCache.removeCache(USER_INFO)
  localCache.removeCache(USER_MENUS)
  router.push('/login')
}
</script>


<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .header-icon {
    cursor: pointer;
  }
  .header-right {
    flex: 1;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      .info-icon {
        display: flex;
        align-items: center;
        .bell {
          position: relative;
          .dot {
            position: absolute;
            top: -4px;
            left: 16px;
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #ff0000;
            border-radius: 50%;
          }
        }
        span {
          margin-right: 14px;
        }
      }
      .info-dropdown {
        .info-avatar {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
.dialog-content {
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-size: 16px;
  }
}
</style>