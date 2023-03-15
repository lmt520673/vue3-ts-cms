import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getCaptchaImageRequest,
  getLoginInfoRequest,
  getLoginMenusRequest
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

interface IState {
  token: string
  captchaImage: string
  uuid: string
  userInfo: any
  routes: any[]
}

const useLoginStore = defineStore('login', {
  state: (): IState => {
    return {
      // id: '',
      // name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      captchaImage: '',
      uuid: '',
      userInfo: {},
      routes: []
    }
  },
  actions: {
    //获取图片验证码
    async getCaptchaImageAction() {
      const res = await getCaptchaImageRequest()
      this.uuid = res.uuid
      this.captchaImage = 'data:image/gif;base64,' + res.img
    },
    //登录事件
    async loginAction(account: ILoginAccount) {
      //调取登录接口  执行登录逻辑
      const res = await accountLoginRequest(account)
      // this.id = res.data.id
      // this.name = res.data.name
      this.token = res.token

      //本地存储token值
      localCache.setCache(LOGIN_TOKEN, this.token)

      //跳转到主页
      router.push('/main')
    },
    async loginUserInfoAction() {
      const res = await getLoginInfoRequest()
      this.userInfo = res.user
    },

    async loginMenusInfoAction() {
      const res = await getLoginMenusRequest()
      this.routes = res.data
      console.log(this.routes)
    }
  }
})

export default useLoginStore
