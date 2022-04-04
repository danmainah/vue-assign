<template>
  <MyBeers />
</template>

<script>
import MyBeers from './components/MyBeers.vue'

export default {
  name: 'App',
  components: {
    MyBeers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
