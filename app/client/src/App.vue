<template>
  <div id="app">
    <HelloWorld msg="Kioku - Learn Japanese"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: '本明朝-Book 新小がな JIS2004','HonMinSKok-Book JIS2004',serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #db9989;
  margin-top: 60px;
}
</style>
