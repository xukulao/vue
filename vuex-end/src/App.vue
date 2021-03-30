<template>
  <div>
    <Headers></Headers>
    <vx></vx>
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
    Headers,
    'vx':{
      template:"<p>v-x</p>"
    }
  }
}
</script>

<style>
#app {
}
</style>
