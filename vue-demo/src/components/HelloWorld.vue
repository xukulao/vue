<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      name:"i am tony and 18 ages"
    }
  }
}
</script>

<style scoped>

</style>
