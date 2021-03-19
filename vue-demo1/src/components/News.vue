<template>
    <div id="news">
        <p>这里是新闻</p>
        <button @click="send">Send</button>
        <hr/>
        <ul>
            <li v-for="(v,index) of newsList" :key="index">{{v}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "News",
        data(){
          return {
              newsList:{}
          }
        },
        methods:{
            send(){
                axios.get("https://api.github.com/")
                    .then(resp=>{
                        console.log(resp.data);
                        this.newsList=resp.data;
                    })
            }
        }
    }
</script>

<style scoped>
#news{
    marign:20px 0px 0px 0px;
    float:left;
}
</style>