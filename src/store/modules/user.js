import { getToken, setToken, removeToken } from '@/utils/auth'
import { userLoginApi } from '@/api'
export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    REMOVE_TOKEN(state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    async TOKEN_ACTION({ commit }, userInfo) {
      try {
        const data = await userLoginApi(userInfo)
        console.log(data)
        commit('SET_TOKEN', data.token)
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
