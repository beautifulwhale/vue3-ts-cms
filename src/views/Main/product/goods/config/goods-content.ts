export const contentTableConfig = {
  proplist: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotname: 'image' },
    { prop: 'enable', label: '状态', minWidth: '100', slotname: 'status' },
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
  ]
}
