<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="" >Button1</el-button>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
    </div>

  </div>

</template>

<script type="module">
import {ref} from 'vue'

export default { // 由于脚手架的原因，这里的export default是必须的
  name: 'App'
}
const dynamicId = 'foo'
const meg = 'foo'
const titleObj = ref('title')
console.log(titleObj.value)



</script>


<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
