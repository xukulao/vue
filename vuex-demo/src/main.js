import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 8
        }
    },
    // getters:{
    //   count(state){
    //       return state.count;
    //   }
    // },
    // actions:{
    //     // increment(context){
    //     //     console.log(context);
    //     // }
    //     increment({commit,state}){
    //         commit('increment');
    //     }
    // },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app')
