const state = {
    value: 0,
  }
  
  const mutations = {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    setValue(state, newValue) {
      state.value = newValue
    },
    reset(state) {
      state.value = 0
    },
  }
  
  const actions = {}
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  }
  