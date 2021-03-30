<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="vuex app"/>
  <div>
    <p>当前数据：{{count}}</p>
    <p>get:{{getCount}}</p>
    <button @click="increment">+</button>
    <button @click="descrment">-</button>
    <button @click="descrmentAsync">异步增加</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import types from './store/types'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
    count(){
      return this.$store.state.users.count;
    },
    getCount(){
      return this.$store.state.getUsersCount;
    }
  },
  methods: {
    increment() {
      this.$store.commit(types.INCREMENT)
      console.log(this.$store.state.count)
    },
    descrment(){
      this.$store.commit(types.DESCRMENT)
    },
    descrmentAsync(){
      this.$store.commit('descrmentAsync')
    }
  }
}
</script>

<style>
#app {

}
</style>
