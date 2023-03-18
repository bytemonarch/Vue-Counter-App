import { createStore } from 'vuex'
import NumberCounter from './modules/NumberCounter'

const store = createStore({
  modules: {
    NumberCounter,
  },
})

export default store
