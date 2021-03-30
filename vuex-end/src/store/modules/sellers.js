
import types from '../types.js'
import axios from 'axios'
const state={
    sellers:{}
}

const getters={
    sellers(state){
        return state.sellers;
    }
}

const actions={

    getSellers({commit}){

        axios.get("https://api.github.com/users/immortalChensm").then(resp=>{
            console.log(resp.data);
            //state.sellers=resp.data;
            commit(types.GET_SELLERS,resp.data);
        })
    }
}

const mutations ={

    [types.GET_SELLERS](state,data){

        state.sellers = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}