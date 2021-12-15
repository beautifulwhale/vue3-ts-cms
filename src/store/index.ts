import { createStore } from 'vuex'
import loginMoudle from './login/login'
import IRootType from './roottype'
const store = createStore<IRootType>({
  state() {
    return {
      name: 'coderwhy',
      age: 12
    }
  },
  modules: {
    loginMoudle
  }
})
export function localLogin() {
  store.dispatch('loadLocalLogin')
}
export default store
