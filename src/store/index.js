import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
  },
  getters: {
  },
  mutations: {
    getCarsData(state, placeholder){
      state.cars = placeholder
    }
  },
  actions: {
    async getData({commit}){
      let response = await fetch('https://arachnidarchitect.github.io/-06.24.24-JsonData/')
      let data = await response.json()
      let {cars} = data
      commit("getCarsData",cars)
      
      console.log(data)
      return data
    }
  },
  modules: {
  }
})
// https://arachnidarchitect.github.io/-06.24.24-JsonData/