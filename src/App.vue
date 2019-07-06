<template>
  <div id="app" class="mt-2">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Head msg="Welcome to Your Vue.js App"/>
    <Content />
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Content from './components/Content'

export default {
  name: 'app',
  components: {
    Head,
    Content
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
