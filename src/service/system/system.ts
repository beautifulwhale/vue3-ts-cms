import { lRequest } from '..'
import { IDataType } from './type'
export function getPageList(url: string, queryInfo: any) {
  return lRequest.request<IDataType<any>>({
    url: url,
    method: 'post',
    data: queryInfo
  })
}
export function deletePagedare(url: string) {
  return lRequest.request<IDataType<any>>({
    url: url,
    method: 'delete'
  })
}
export function newPageAction(url: string, queryInfo: any) {
  return lRequest.request({
    url: url,
    method: 'post',
    data: queryInfo
  })
}
export function editPageAction(url: string, queryInfo: any) {
  return lRequest.request({
    url: url,
    method: 'patch',
    data: queryInfo
  })
}
