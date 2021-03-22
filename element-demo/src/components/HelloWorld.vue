<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning" @click="submits">警告按钮</el-button>
      <el-button type="danger" @click="show">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    show(){
      console.log("危险按钮");
    }
  },
  data(){
    return {
      msg:"Element UI 演示"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
