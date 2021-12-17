import { lRequest } from '..'
import { IDataType } from './type'
export default function getPageList(url: string, queryInfo: any) {
  return lRequest.request<IDataType<any>>({
    url: url,
    method: 'post',
    data: queryInfo
  })
}
