export const rules = {
  name: [
    {
      required: true,
      message: '用户名为必填项',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名在5～10位的数字或字母',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码为必填项',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,10}$/,
      message: '密码在5～10位的数字或字母',
      trigger: 'blur'
    }
  ]
}
