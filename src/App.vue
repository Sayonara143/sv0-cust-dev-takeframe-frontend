<template>
  <div id="app">
    <v-global/>
  </div>
</template>

<script>
import vGlobal from './components/v-global'
export default {
  name: 'App',
  components: {
    vGlobal
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0px;
}
html{
  box-sizing: border-box;
  min-height: 100%;
}
body{
  min-height: 100%;
  margin:0;
  padding: 0;
}
*, *::before, *::after{
  box-sizing: inherit;
}

</style>
