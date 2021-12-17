import ILoginType from './login/type'
import ISystemType from './system/type'
export interface IRootType {
  name: string
  age: number
}
export interface MoundleType {
  loginMoudle: ILoginType
  system: ISystemType
}
export type IStoreType = IRootType & MoundleType
