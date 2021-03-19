<template>
  <div class="hello">
    <p>{{msg}}</p>
    <ul>
      <li v-for="(v,i) in users" :key="i" @click="show($event)">{{i}}--{{v['name']}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:"china 中国",
      users:[
        {id:1,name:"lucy"},
        {id:2,name:"jack"},
        {id:3,name:"tom"},
      ]
    }
  },
  methods:{
    show(e){

      console.log(e.target.innerHTML);
    }
  },
  filters:{
    addName:(data,s)=>{
      return data+s.toUpperCase();
    }
  }
}
</script>

<style scoped>

</style>
