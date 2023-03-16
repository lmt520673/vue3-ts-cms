import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getCaptchaImageRequest,
  getLoginInfoRequest,
  getLoginMenusRequest
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import router from '@/router'

interface IState {
  token: string
  captchaImage: string
  uuid: string
  userInfo: any
  userMenus: any[]
}

const useLoginStore = defineStore('login', {
  state: (): IState => {
    return {
      // id: '',
      // name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      captchaImage: '',
      uuid: '',
      userInfo: localCache.getCache(USER_INFO) ?? {},
      userMenus: localCache.getCache(USER_MENUS) ?? []
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

      //拿到token
      const res = await accountLoginRequest(account)
      this.token = res.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      //拿到用户信息
      const userInfo = await getLoginInfoRequest()
      this.userInfo = userInfo.user
      localCache.setCache(USER_INFO, userInfo.user)
      // this.id = res.data.id
      // this.name = res.data.name

      //拿到用户菜单
      const meusResult = await getLoginMenusRequest()
      this.userMenus = meusResult.data
      localCache.setCache(USER_MENUS, meusResult.data)
      // console.log(meusResult)
      //本地存储token值

      // localCache.setCache(USER_MENUS, )

      //跳转到主页
      router.push('/main')
    }
  }
})

export default useLoginStore
