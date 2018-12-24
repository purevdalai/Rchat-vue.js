import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './user/index.js'
import chatStore from './chat/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userStore,
        chatStore,
    }
})
  