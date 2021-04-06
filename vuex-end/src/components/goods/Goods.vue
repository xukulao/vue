<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="(item,k) of goods" :key="k">{{item.name}}</li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li v-for="(item,k) in goods" :key="k">{{item.id}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    export default {
        name: "Goods",
        created() {

            this.$store.dispatch("getGoods");
        },
        computed:{
            ...mapGetters([
                "goods"
            ])
        }
    }
</script>

<style scoped>

</style>