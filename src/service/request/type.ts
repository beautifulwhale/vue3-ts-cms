import { AxiosRequestConfig } from 'axios'
export interface ImyInterceptor {
  requestHook?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestErrHook?: (err: any) => any
  responseHook?: (res: any) => any
  responseErrHook?: (err: any) => any
}
export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: ImyInterceptor
  showLoding?: boolean
}
