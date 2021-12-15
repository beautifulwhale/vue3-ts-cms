import myRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import cache from '@/utils/cache'
export const lRequest = new myRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestHook: (config: any) => {
      const token = cache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestErrHook: (err) => {
      console.log('实例请求失败拦截')
      return Promise.reject(err)
    },
    responseHook: (config) => {
      return config
    },
    responseErrHook: (err) => {
      console.log('实例响应失败拦截')
      return Promise.reject(err)
    }
  }
})
