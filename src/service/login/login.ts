import { lRequest } from '../index'
import { IAccountType, IDataType, loginData } from './type'
enum LoginPath {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenu = '/role/'
}
export function loginRequest(account: IAccountType) {
  return lRequest.request<IDataType<loginData>>({
    url: LoginPath.AccountLogin,
    method: 'post',
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return lRequest.request<IDataType<any>>({
    url: LoginPath.UserInfo + id,
    method: 'get'
  })
}
export function getMenuById(id: number) {
  return lRequest.request<IDataType<any>>({
    url: LoginPath.UserMenu + id + '/menu',
    method: 'get'
  })
}
