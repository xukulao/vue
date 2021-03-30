<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <br/>
  <div>
    <button @click="increment">+</button>
    <button @click="descrment">-</button>
    <button @click="descrmentAsync">异步增加</button>
  </div>
  <div>
    <p>当前数据：{{count}}</p>
    <input type="text" v-model="name"/>
    <input type="text" v-model="age"/>
    <hr/>
    <span>{{name}}--{{age}}</span>
    <button @click="sendData">提交数据</button>
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
    },
    name:{
      set(v){
        this.$store.state.name =v;
      },
      get(){
        return this.$store.state.name;
      }

    },
    age:{
      get(){
        return this.$store.state.age;
      },
      set(v){
        this.$store.state.age =v;
      }
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
    },
    descrment(){
      this.$store.commit('descrment')
    },
    descrmentAsync(){
      this.$store.commit('descrmentAsync')
    },
    sendData(){
      this.$store.commit('sendData')
    }
  }
}
</script>

<style>
#app {

}
</style>
