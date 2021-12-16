import ILoginType from './login/type'
export interface IRootType {
  name: string
  age: number
}
export interface MoundleType {
  loginMoudle: ILoginType
}
export type IStoreType = IRootType & MoundleType
