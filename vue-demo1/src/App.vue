<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld/>-->
  <h2>个人中心</h2>
  <div>
    <router-link to="/home" >主页</router-link>
    <router-link to="/news" >新闻</router-link>
  </div>
  <div id="clear"></div>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
  #clear{
    clear:both;
  }
  a{
    width:100px;
    height:30px;
    background-color: #0b2e13;
    color: white;
    text-decoration: none;
    display: block;
    float: left;
    text-align: center;
    padding: 5px;
  }
#app {

}
</style>
