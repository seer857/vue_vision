import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局state对象  
const state = {
  forthValues: {
    one: [],
    two: ["2","1","3","4","0","8","1"]
  }
}

// 获取state 对象里的对象（计算属性）
const getters = {
  getForthOneValue(state) {
    return state.forthValues;
  }
}
// 设置，唯一可以修改state对象里值的方法
const mutations = {
  updataForthOneValue(state, forthOneValue) {
    state.forthValues = forthOneValue
  }
}
// 异步执行 mutations 方法
const actions = {
    asyncUpdateForthOneValue(context,asyncforthOneValue){
      context.commit("updataForthOneValue",asyncforthOneValue)
    }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
