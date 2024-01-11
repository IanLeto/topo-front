<template>
  <div id="app">

    <h1>1{{ message }}</h1>
  </div>
</template>

<script>
  import {reactive} from "vue";
  let message = 'hello'
  const counter = reactive({
    count: 0
  })
  console.log(counter.count)
  counter.count++

</script>

<script>
export default {
  name: 'App'
}

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
