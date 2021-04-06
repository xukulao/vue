<template>
   <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
       <div class="detail" v-show="detailSHow" >
           详情页
           <br/>
            <h2>{{sellers.name}}</h2>
           <br/>
           <h2>{{sellers.company}}</h2>
           <br/>
           <ul>
               <li v-for="(item,k) of shopes" :key="k">{{item.name}}</li>
           </ul>
           <button class="close" @click="hideDetail">关闭</button>
       </div>
   </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import 'animate.css/animate.css'
    export default {
        name: "Detail",
        computed:{
            ...mapGetters([
                "detailSHow",
                "sellers"
            ]),
            shopes(){
                return [
                    {"id":1,"name":"水果店"},
                    {"id":2,"name":"服装店"},
                    {"id":3,"name":"洗衣店"},
                ]
            }
        },
        methods:{
            hideDetail(){
                this.$store.dispatch("hideDetail");
            }
        }
    }
</script>

<style scoped>

    .detail{
        position: fixed;
        left:0;
        top:0;
        z-index: 666;
        width:100%;
        height:100%;
        overflow: auto;
        background-color: rgba(7,17,27,0.8);
    }
    .detail .close
    {
        position:absolute;
        bottom:50px;
        left:50%;
    }
</style>