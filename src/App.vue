<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
};
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-color: black;
  color: white;
  .container {
    background-color: inherit;
    color: inherit;
  }
}
</style>
