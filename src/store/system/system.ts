import { Module } from 'vuex'
import { IRootType } from '../rootType'
import ISystemType from './type'
import getPageList from '@/service/system/system'
export const system: Module<ISystemType, IRootType> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userTotal: 0,
      roleList: [],
      roleTotal: 0
    }
  },
  getters: {
    getPageData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
          default:
            break
        }
      }
    }
  },
  mutations: {
    changeUserList(state, payload) {
      state.userList = payload
    },
    changeUserTotal(state, payload) {
      state.userTotal = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeRoleTotal(state, payload) {
      state.roleTotal = payload
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      const pageList = await getPageList(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageList.data
      switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserTotal', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleTotal', totalCount)
          break
        default:
          break
      }
    }
  }
}
