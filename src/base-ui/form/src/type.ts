type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export default interface IFormItem {
  type: IFormType
  label: string
  field: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}
export interface IForm {
  labelWidth?: string
  itemLayout?: any
  colLayout?: any
  formItems?: IFormItem[]
}
