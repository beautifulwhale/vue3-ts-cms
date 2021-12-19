import { IDataType } from './type'
import { lRequest } from '../index'
enum dashboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
  return lRequest.request<IDataType>({
    url: dashboardApi.categoryGoodsCount,
    method: 'get'
  })
}
export function getCategoryGoodsSale() {
  return lRequest.request<IDataType>({
    url: dashboardApi.categoryGoodsSale,
    method: 'get'
  })
}
export function getCategoryGoodsFavor() {
  return lRequest.request<IDataType>({
    url: dashboardApi.categoryGoodsFavor,
    method: 'get'
  })
}
export function getAddressGoodsSale() {
  return lRequest.request<IDataType>({
    url: dashboardApi.addressGoodsSale,
    method: 'get'
  })
}
