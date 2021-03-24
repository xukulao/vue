<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <br/>
  <div>
    <button @click="increment">+</button>
    <button>-</button>
  </div>
  <div>
    <p>当前数据：{{count}}</p>
  </div>
</template>

<script>
  // import {mapGetters,mapActions} from 'vuex'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  // computed:mapGetters([
  //         'count'
  // ]),
  // methods:mapActions([
  //         'increment'
  // ])
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style>
#app {

}
</style>
