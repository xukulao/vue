
import types from '../types.js'
import axios from 'axios'
const state={
    sellers:{},
    detailSHow:false
}

const getters={
    sellers(state){
        return state.sellers;
    },
    detailSHow(state){
        return state.detailSHow
    }
}

const actions={

    getSellers({commit}){

        axios.get("https://api.github.com/users/immortalChensm").then(resp=>{
            console.log(resp.data);
            //state.sellers=resp.data;
            commit(types.GET_SELLERS,resp.data);
        })
    },
    showDetail({commit}){
        commit(types.SHOW_DETAIL);
    },
    hideDetail({commit}){
        commit(types.HIDE_DETAIL);
    }
}

const mutations ={

    [types.GET_SELLERS](state,data){

        state.sellers = data;
    },
    [types.SHOW_DETAIL](state){
        state.detailSHow=true;
    },
    [types.HIDE_DETAIL](state){
        state.detailSHow=false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}