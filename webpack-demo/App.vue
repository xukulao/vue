<template >
    <div id="it">
        <h1> 我草，居然好了</h1>
        <h2>{{msg}}</h2>
        <user-list></user-list>
        <hr/>
        <Users></Users>
    </div>
</template>

<script>

    import Users from "./components/Users.vue"
    export default {
        data(){
            return {
                msg:"china"
            }
        },
        methods:{

        },
        components:{
            'user-list':Users,
            Users
        }
    }
</script>

<style>
    body{
        background-color: #0c5460;
    }
</style>