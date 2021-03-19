<template>
    <div>
        <ul>
            <li v-for="v in users" @click="show($event)">{{v}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                users:["tom","jack","lucy"]
            }
        },
        methods:{
            show(e){
                console.log(e);
            }
        }
    }
</script>

<style scoped>

</style>