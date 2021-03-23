import Login from './Login.vue'
//自定义全局组件（插件）
export default {
    install:function (Vue) {
        Vue.component('login',Login)
    }
}