export interface IAccountType {
  name: string
  password: string
}
export interface loginData {
  token: string
  id: number
  name: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
