<template>
  <div class='v-global'>
    <v-header />
    <v-container />
    <v-footer />
  </div>
</template>

<script>
import vFooter from './v-footer'
import vHeader from './v-header'
import vContainer from './v-container'

export default {
  name: 'container',
  components: {
    vFooter,
    vHeader,
    vContainer
  }
}
</script>

<style>
.v-global{
  margin: 0px;
  padding: 0px;
  min-height: 100%;
}
</style>
