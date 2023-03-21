import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  // getCaptchaImageRequest,
  getLoginInfoRequest,
  getLoginMenusRequest
} from '@/service/login/login'
import type { ILoginAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN, USER_INFO, USER_MENUS } from '@/global/constants'
import router from '@/router'
import { getUserMenusMapMenu } from '@/utils/menus-map'

interface IState {
  id: string
  roleId: string
  token: string
  // captchaImage: string
  // uuid: string
  userInfo: any
  userMenus: any[]
}

const useLoginStore = defineStore('login', {
  state: (): IState => {
    return {
      id: '',
      roleId: '',
      // name: '',
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      // captchaImage: '',
      // uuid: '',
      userInfo: localCache.getCache(USER_INFO) ?? {},
      userMenus: localCache.getCache(USER_MENUS) ?? []
    }
  },
  actions: {
    // //获取图片验证码
    // async getCaptchaImageAction() {
    //   const res = await getCaptchaImageRequest()
    //   this.uuid = res.uuid
    //   this.captchaImage = 'data:image/gif;base64,' + res.img
    // },
    //登录事件
    async loginAction(account: ILoginAccount) {
      //调取登录接口  执行登录逻辑

      //拿到token
      const res = await accountLoginRequest(account)
      const userId = res.data?.id
      this.id = userId
      this.token = res.data?.token
      localCache.setCache(LOGIN_TOKEN, this.token)

      if (!localCache.getCache(LOGIN_TOKEN)) return

      //拿到用户信息
      const userInfo = await getLoginInfoRequest(userId)
      const roleId = userInfo.data?.role?.id
      this.userInfo = userInfo.data
      localCache.setCache(USER_INFO, userInfo.data)

      //拿到用户菜单
      const meusResult = await getLoginMenusRequest(roleId)
      const userMenus = meusResult.data
      this.userMenus = userMenus
      localCache.setCache(USER_MENUS, meusResult.data)

      getUserMenusMapMenu(userMenus)

      router.push('/main')
    },
    loadLocalRoutes() {
      // this.token = localCache.getCache(LOGIN_TOKEN)
      // this.userInfo = localCache.getCache(USER_INFO)
      // this.userMenus = localCache.getCache(USER_MENUS)
      getUserMenusMapMenu(localCache.getCache(USER_MENUS))
    }
  }
})

export default useLoginStore
