import hyRequest from '..'
import type { ILoginAccount } from '@/types'

export function accountLoginRequest(account: ILoginAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
