<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button @click="">Button1</el-button>
    <div>
      <p> {{ msg }}</p>
    </div>
  </div>

</template>

<script src="">
import {ref} from 'vue'

const ian = {}
ian.data = function () {
  return {
    msg: '2'
  }
}

export default ian
</script>


<!--<script type="module">-->
<!--import {ref} from 'vue'-->

<!--// export default { // 由于脚手架的原因，这里的export default是必须的-->
<!--//   name: 'App'-->
<!--// }-->
<!--// const dynamicId = 'foo'-->
<!--// const meg = 'foo'-->
<!--// const titleObj = ref('title')-->
<!--// console.log(titleObj.value)-->


<!--</script>-->


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
