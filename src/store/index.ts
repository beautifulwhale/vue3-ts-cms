import { createStore, Store, useStore as useStoreRaw } from 'vuex'
import loginMoudle from './login/login'
import { IStoreType, IRootType } from './rootType'
import { system } from './system/system'
import { analysis } from './analysis/dashboard'
import { getPageList } from '../service/system/system'
const store = createStore<IRootType>({
  modules: {
    loginMoudle,
    system,
    analysis
  },
  state() {
    return {
      name: 'coderwhy',
      age: 12,
      allDepartment: [],
      allRole: [],
      allMenu: []
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.allDepartment = list
    },
    changeRole(state, list) {
      state.allRole = list
    },
    changeMenu(state, list) {
      state.allMenu = list
    }
  },
  actions: {
    async getDepartmentAndRole({ commit }) {
      const departMentResult = await getPageList('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departments } = departMentResult.data
      commit('changeDepartment', departments)
      const roleResult = await getPageList('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roles } = roleResult.data
      commit('changeRole', roles)
      const menuResult = await getPageList('/menu/list', {})
      const { list: menus } = menuResult.data
      commit('changeMenu', menus)
    }
  }
})
export function localLogin() {
  store.dispatch('loginMoudle/loadLocalLogin')
  store.dispatch('getDepartmentAndRole')
}
export function useStore(): Store<IStoreType> {
  return useStoreRaw()
}
export default store
