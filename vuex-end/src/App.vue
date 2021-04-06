<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
  </div>

  <div>
    <router-view></router-view>
  </div>

</template>

<script>

  import Headers from "./components/headers/Headers"

export default {
  name: 'App',
  components:{
    'v-header':Headers
  }
}
</script>

<style>
#app {
}
  #app .tab{
    width:100%;
    height:40px;
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  #app .tab-item{
    flex:1;
    text-align: center;
  }
  #app .tab-item a{
    font-size:14px;
    display: block;
  }
  #app .tab-item a.active{
    color:red;
  }
</style>
