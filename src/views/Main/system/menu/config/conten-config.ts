export const contentTableConfig = {
  proplist: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'url', label: '菜单URL', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotname: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotname: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotname: 'handler'
    }
  ],
  childrenConfig: {
    'row-key': 'id',
    'tree-props': { children: 'children' }
  }
}
