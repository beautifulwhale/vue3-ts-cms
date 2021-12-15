import axios from 'axios'
import { AxiosInstance } from 'axios'
import { ImyInterceptor, MyRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
export default class myRequest {
  instance: AxiosInstance
  interceptors?: ImyInterceptor
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoding ?? true
    //1.从config中取出实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestHook,
      this.interceptors?.requestErrHook
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseHook,
      this.interceptors?.responseErrHook
    )
    //2.全局的拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中....',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('全局请求拦截失败')
        console.log(err)
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        this.loading?.close()
        const result = config.data
        if (result.returnCode === '-1001') {
          console.log('请求失败,错误信息')
        } else {
          return result
        }
        return config
      },
      (err) => {
        console.log('全局响应拦截失败')
        this.loading?.close()
        console.log(err)
      }
    )
  }

  request<T>(config: MyRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //每个请求单独的拦截器
      if (config.interceptors?.requestHook) {
        config = config.interceptors.requestHook(config)
      }
      if (!config.showLoding) {
        this.showLoading = config.showLoding ?? true
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseHook) {
            res = config.interceptors.responseHook(res)
          }
          resolve(res)
          //在每次请求之后把showLoading置为初始值，避免影响其他请求
          this.showLoading = true
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
        })
    })
  }
}
