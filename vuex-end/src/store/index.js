import { createStore, createLogger } from 'vuex'
import sellers from './modules/sellers'
import goods from './modules/goods'
import ratings from './modules/ratings'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    state,
    getters,
    actions,
    mutations,
    modules: {
        sellers,
        goods,
        ratings
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})