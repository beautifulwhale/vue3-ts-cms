import { IForm } from '../../../../../base-ui/form/src/type'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  labelWidth: '80px',
  colLayout: { spam: 24 },
  itemLayout: {}
}
