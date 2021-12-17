import { createStore, Store, useStore as useStoreRaw } from 'vuex'
import loginMoudle from './login/login'
import { IStoreType, IRootType } from './rootType'
import { system } from './system/system'
const store = createStore<IRootType>({
  state() {
    return {
      name: 'coderwhy',
      age: 12
    }
  },
  modules: {
    loginMoudle,
    system
  }
})
export function localLogin() {
  store.dispatch('loginMoudle/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useStoreRaw()
}
export default store
