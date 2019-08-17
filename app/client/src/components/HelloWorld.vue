<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="button-area-line">
      <a href="#">Study</a>
      <a href="#">Create Deck</a>
      <a href="#">Import Deck</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../src/assets/syle/style.scss'
</style>
