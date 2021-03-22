<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="element UI 组件使用"/>
  <hr/>
  <DatePicker :date="date"></DatePicker>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DatePicker from './components/DatePicker.vue'
export default {
  name: 'App',
  data(){
    return {
      date:'',
    }
  },
  methods:{
    submits(){
      console.log(this.date);
    }
  },
  components: {
    HelloWorld,
    DatePicker
  }
}
</script>

<style>
#app {

}
</style>
