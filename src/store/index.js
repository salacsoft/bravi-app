import { createStore } from 'vuex'
import AuthStore from '@/views/auth/store-routes/auth-store';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    AuthStore,
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => window.atob(sessionStorage.getItem(key)),
      setItem: (key, value) => sessionStorage.setItem(key, window.btoa(value)),
      removeItem: key => sessionStorage.removeItem(key)
    }
  })]
})
