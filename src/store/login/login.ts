import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      id: '',
      name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? ''
    }
  },
  actions: {
    async loginAction(account: ILoginAccount) {
      //调取登录接口  执行登录逻辑
      const res = await accountLoginRequest(account)
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token

      //本地存储token值
      localCache.setCache(LOGIN_TOKEN, this.token)

      //跳转到主页
      router.push('/main')
      return res
    }
  }
})

export default useLoginStore
