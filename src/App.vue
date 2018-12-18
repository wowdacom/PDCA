<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <transition mode="out-in" name="fade">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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
