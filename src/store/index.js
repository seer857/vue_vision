import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 全局state对象  
const state = {
  forthValues: {
    FilipSzData: ["2","1","3","4","0","8","1"],
    FilipTextData:['"销"','"量"','"台"'],
    dataname:['净利润:'],
    datasu:[1898666]
  },
  
}

// 获取state 对象里的对象（计算属性）
const getters = {
  // getForthOneValue(state) {
  //   return state.forthValues;
  // }
}
// 设置，唯一可以修改state对象里值的方法
const mutations = {
  updataForthOneValue(state, forthOneValue) {
    let tmpone=forthOneValue.forthValues.one
    let tmptwo=forthOneValue.forthValues.two
    let tmpthree=forthOneValue.forthValues.three
    let tmpfour=forthOneValue.forthValues.four
    state.forthValues.FilipSzData =tmpone
    state.forthValues.FilipTextData =tmptwo
    state.forthValues.dataname =tmpthree
    state.forthValues.datasu =tmpfour
    // let tmparr=forthOneValue.forthValues
    // state.forthValues =tmparr
    //  console.log(tmparr)
   // console.log(forthOneValue.forthValues.one)
  },
  // updataFontShowData(state,forthValues){
  //   state.fontShowData= forthValues
  // }
}
// 异步执行 mutations 方法
const actions = {
    // asyncUpdateForthOneValue(context,asyncforthOneValue){
    //   context.commit("updataForthOneValue",asyncforthOneValue)
    // }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
