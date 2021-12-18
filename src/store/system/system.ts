import { Module } from 'vuex'
import { IRootType } from '../rootType'
import ISystemType from './type'
import {
  getPageList,
  deletePagedare,
  newPageAction,
  editPageAction
} from '@/service/system/system'
export const system: Module<ISystemType, IRootType> = {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      userTotal: 0,
      roleList: [],
      roleTotal: 0,
      goodsList: [],
      goodsTotal: 0,
      menuList: [],
      menuTotal: 0
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
          case 'goods':
            return state.goodsList
          case 'menu':
            return state.menuList
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
    },
    changeGoodsList(state, payload) {
      state.goodsList = payload
    },
    changeGoodsTotal(state, payload) {
      state.goodsTotal = payload
    },
    changeMenuList(state, payload) {
      state.menuList = payload
    },
    changeMenuTotal(state, payload) {
      state.menuTotal = payload
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
        case 'goods':
          commit('changeGoodsList', list)
          commit('changeGoodsTotal', totalCount)
          break
        case 'menu':
          commit('changeMenuList', list)
          commit('changeMenuTotal', totalCount)
          break
        default:
          break
      }
    },
    async deleteData({ dispatch }, payload) {
      const pageName = payload.pageName
      const id = payload.id
      const pageUrl = `/${pageName}/${id}`
      await deletePagedare(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 1000
        }
      })
    },
    //新建用户
    async newHandle({ dispatch }, payload) {
      const pageUrl = `/${payload.pageName}`
      const queryInfo = payload.newData
      console.log(queryInfo)
      const res = await newPageAction(pageUrl, queryInfo)
      console.log(res)
      //重新更新数据
      dispatch('getPageListAction', {
        pageName: payload.pageName,
        queryInfo: {
          offset: 0,
          size: 1000
        }
      })
    },
    async editHandle({ dispatch }, payload) {
      const pageUrl = `/${payload.pageName}/${payload.id}`
      const queryInfo = payload.editData
      const res = await editPageAction(pageUrl, queryInfo)
      console.log(res)
      dispatch('getPageListAction', {
        pageName: payload.pageName,
        queryInfo: {
          offset: 0,
          size: 1000
        }
      })
    }
  }
}
