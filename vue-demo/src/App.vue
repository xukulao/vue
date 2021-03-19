<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h2>好的，没有问题了</h2>
  <button @click="show">click show menu</button>
  <hr/>
  <China v-if="menu"></China>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import China from './components/China.vue'

export default {
  name: 'App',
  data(){
    return {
      menu:false
    }
  },
  methods:{
    show(){
      this.menu = !this.menu;
    }
  },
  components: {
    HelloWorld,
    China
  }
}
</script>

<style>
#app {

}
</style>
