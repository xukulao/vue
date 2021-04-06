
import types from '../types.js'
//import axios from 'axios'
const state={
    goods:[]
}

const getters={
    goods(state){
        return state.goods;
    }
}

const actions={
    getGoods({commit}){
        // axios.get("http://m.weather.com.cn/data/101010100.html").then(resp=>{
        //     console.log(resp);
        //     commit();
        //
        // })
        let testGoods = [
            {id:1,name:"苹果"},
            {id:2,name:"桔子"},
            {id:3,name:"栗子"},
        ]
        commit(types.GET_GOODS,testGoods);
    }
}

const mutations ={

    [types.GET_GOODS](state,data){
        state.goods = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}