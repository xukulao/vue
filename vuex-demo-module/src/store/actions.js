//import types from './types.js'
const actions = {
    descrmentAsync({commit}){

        var p = new Promise((resolve)=>{

            setTimeout(()=>{
                resolve();
            },2000);
        });
        p.then(()=>{
            commit('descrmentAsync');
        }).catch(()=>{
            console.log("async error");
        })
    },
}

export default actions;