<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  width:100%;
  height: 90%;
}
body {
  background: url("./assets/background.png") no-repeat fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
