import types from '../types.js'
var state={
    count:6
}

var getters={
    count(state){
        return state.count;
    }
}

const actions = {
    increment({commit}) {
        commit(types.INCREMENT);
    },
    descrment({commit}) {
        commit(types.DESCRMENT);
    }
}

const mutations = {
    [types.INCREMENT](state){
        state.count++;
    },
    [types.DESCRMENT](state) {
        state.count--;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}