export let BASE_URL = ''
export const TIME_OUT = 5000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://www.baidu.com'
} else {
  BASE_URL = 'http://www.qq.com'
}
