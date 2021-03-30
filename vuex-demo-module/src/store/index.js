import { createStore, createLogger } from 'vuex'
import users from './modules/users'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    getters,
    actions,
    mutations,
    modules: {
        users,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})