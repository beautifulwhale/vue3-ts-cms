import ILoginType from './login/type'
import ISystemType from './system/type'
import { IAnalysis } from './analysis/type'
export interface IRootType {
  name: string
  age: number
  allDepartment: any[]
  allRole: any[]
  allMenu: any[]
}
export interface MoundleType {
  loginMoudle: ILoginType
  system: ISystemType
  analysis: IAnalysis
}
export type IStoreType = IRootType & MoundleType
