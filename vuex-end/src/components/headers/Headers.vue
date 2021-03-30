<template>
    <div class="header">
        {{sellers.bio}}
        {{msg}}
    </div>
</template>

<script>
    // import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'
    export default {
        name: "Headers",
        created() {
            //启动时调用  sellers.js 里的 actions.getSellers 函数
            this.$store.dispatch('getSellers');
        },
        // methods:[mapActions]
        computed:{
            ...mapGetters([
                           'sellers'
            ]),
            msg(){
                return "weclome to china"
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
</style>