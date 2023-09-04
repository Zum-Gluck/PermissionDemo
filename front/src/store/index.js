import Vue from 'vue'
import Vuex from 'vuex'
import { resetRouter } from '@/router'

Vue.use(Vuex)

import { login, getUserInfo } from '@/api/api'
import { setToken, getToken, removeToken } from '@/utils/token.js'

export default new Vuex.Store({
  state: {
    userInfo: {},
    token: getToken()
  },
  getters: {
    userInfo: state => state.userInfo,
    token: state => state.token
  },
  mutations: {
    SET_USERINFO(state, info) {
      state.userInfo = info
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_PERMISSION(state, permission) {
      state.userInfo.permission = permission
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(value => {
          const { token, ...userInfo  } = value.data
          commit('SET_USERINFO', userInfo)
          commit('SET_TOKEN', token)
          setToken(token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    logout({ commit }) {
      removeToken()
      commit('SET_USERINFO', null)
      commit('SET_TOKEN', '')
      resetRouter()
    },
    getUserInfo({ commit }) {
      getUserInfo().then(value => {
        commit('SET_USERINFO', value.data)
      })
    },
    setPermission({ commit }, permission) {
      commit('SET_PERMISSION', permission)
    }
  },
  modules: {
  }
})
