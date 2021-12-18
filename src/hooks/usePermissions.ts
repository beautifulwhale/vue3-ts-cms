import { useStore } from 'vuex'
export function getPermissions(pageName: string, handle: string) {
  const store = useStore()
  const permissions = store.state.loginMoudle.permission
  const verifyPermission = `system:${pageName}:${handle}`
  return !!permissions.find((item: any) => item === verifyPermission)
}
