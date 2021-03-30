import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 8,
            name:'',
            age:0
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
        },
        descrment(state){
            state.count--;
        },
        descrmentAsync(state){

            new Promise((resolve)=>{

                setTimeout(()=>{
                    resolve();
                },2000);
            }).then(()=>{
                state.count++
            }).catch(()=>{
                console.log("async error");
            })
        },
        sendData(state){
            console.log("提交数据");
            console.log(state.name);
            console.log(state.age);
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app')
