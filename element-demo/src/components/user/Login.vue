<template>
    <div id="login">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                msg:"登录"
            }
        }
    }
</script>

<style scoped>
    #login{
        background-color: black;
        height:100px;
        width:200px;
        color: white;
        text-align: center;
    }

</style>