<template>
    <div class="header">
        {{sellers.bio}}
        <img :src="sellers.avatar_url" @click="showDetail">
        {{msg}}--{{getTest}}
        <p @click="actionx">全局动作</p>
        <Detail></Detail>
    </div>
</template>

<script>
    // import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    import Detail from "../detail/Detail"
    export default {
        name: "Headers",
        created() {
            //启动时调用  sellers.js 里的 actions.getSellers 函数
            //state actions mutation getters
            this.$store.dispatch('getSellers');
        },
        // methods:[mapActions]
        computed:{
            ...mapGetters([
                           'sellers',
                'getTest'
            ]),
            msg(){
                return "weclome to china"
            }
        },
        components:{
            Detail
        },
        methods:{
            showDetail(){
                this.$store.dispatch("showDetail");
            },
            actionx(){
                this.$store.dispatch("updateTest");
            }
        }
    }
</script>

<style scoped>

    .header{
        height:134px;
        background-color: #ccc;
        font-size:14px;
    }
    .header img{
        height:50px;
    }
</style>