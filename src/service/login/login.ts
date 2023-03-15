import hyRequest from '..'
import type { ILoginAccount } from '@/types'

export function getCaptchaImageRequest() {
  return hyRequest.get({
    url: '/captchaImage'
  })
}

export function accountLoginRequest(account: ILoginAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getLoginInfoRequest() {
  return hyRequest.get({
    url: '/getInfo'
  })
}

export function getLoginMenusRequest() {
  return hyRequest.get({
    url: '/getRouters'
  })
}
