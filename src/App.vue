<template>
  <div id="app">
    <div id="nav">
      <the-navigation/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation'
export default {
  name: 'App',
  components: {
    'the-navigation': TheNavigation,
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}

#app {
  min-height: 100%;
  overflow: auto;
  position: relative;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;
}

</style>
