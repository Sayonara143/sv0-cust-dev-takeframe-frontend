<template>
  <div class='v-container'>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'v-container'
}
</script>

<style>
.v-container{
  /* background-color: brown; */
  min-height: calc(100vh - 170px);
  position: relative;
  display: grid;
  grid-template-rows: repeat(9, auto);
  grid-row-gap: 30px;
  grid-template-columns: repeat(9, 100px);
  grid-column-gap: 30px;
  margin-top: 0px;
  width: 1140px;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  padding: 0px;
}
</style>
