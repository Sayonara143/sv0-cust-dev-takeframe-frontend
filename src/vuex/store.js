import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    isAuth: false,
    user: [],
    personal_data: []
  },
  mutations: {
    SET_PERSONAL_DATA_TO_STATE: (state, data) => {
      state.personal_data = data
    },
    SET_USER_TO_STATE: (state, user) => {
      state.user = user
    },
    SET_ISAUTH_TO_STATE: (state, key) => {
      state.isAuth = key
    }
  },
  actions: {
    GET_USER_FROM_API ({commit}) {
      let token = localStorage.getItem('accessToken')
      return axios('http://localhost:8080/api/v1/users/sync', {
        method: 'GET',
        headers: {'Authorization': 'Authorization' + ' ' + token}
      })
        .then((user) => {
          commit('SET_USER_TO_STATE', user.data)
          commit('SET_ISAUTH_TO_STATE', true)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            commit('SET_ISAUTH_TO_STATE', false)
          }
        })
    },
    OUT_USER_FROM_API ({commit}) {
      let token = localStorage.getItem('accessToken')
      return axios('http://localhost:8080/api/v1/users/out', {
        method: 'GET',
        headers: {'Authorization': 'Authorization' + ' ' + token}
      })
        .then((response) => {
          let user = []
          commit('SET_USER_TO_STATE', user)
          commit('SET_ISAUTH_TO_STATE', false)
          return response
        })
        .catch((error) => {
          console.log(error)
        })
    },
    GET_PERSONAL_DATA_FROM_API ({commit}) {
      let token = localStorage.getItem('accessToken')
      return axios('http://localhost:8080/api/v1/users/settings', {
        method: 'GET',
        headers: {'Authorization': 'Authorization' + ' ' + token}
      })
        .then((user) => {
          commit('SET_PERSONAL_DATA_TO_STATE', user.data)
          commit('SET_ISAUTH_TO_STATE', true)
          console.log(user.data)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            commit('SET_ISAUTH_TO_STATE', false)
          }
        })
    }
  },
  getters: {}
})

export default store
