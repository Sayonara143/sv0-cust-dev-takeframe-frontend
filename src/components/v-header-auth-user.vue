<template>
  <div  class="v-header-container-auth-user">
    <router-link :to="{name: 'v-profile'}">
      <div class="v-header-container-auth-user">
        <img :src="'http://localhost:8080/'+ this.$store.state.user.path_img" alt="" class="v-header-container-auth-user-img">
        <div  class='v-header-container-auth-user-name'>{{this.$store.state.user.name}}</div>
        <div class='v-header-container-auth-user-ticket'>Тариф: {{this.$store.state.user.ticket}}</div>
      </div>
    </router-link>
    <v-out />
  </div>

</template>

<script>
import vOut from '../components/service/v-out'
export default {
  name: 'v-header',
  components: {
    vOut
  }
}
</script>

<style >
.v-header-container-auth-user{
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  grid-column: 8/9;
  width: 100px;
  transform: translateX(-10px);
}
.v-header-container-auth-user-img{
    margin-left: -80px;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.v-header-container-auth-user-ticket{
    position: absolute;
    margin-top: 12px;
    font-size: 18px;
    height: 20px;
    width: 98px;
    margin-left: 0px;
}
.v-header-container-auth-user-name{
    position: absolute;
    margin-top: -9px;
    margin-left: 12px;
    font-size: 24px;
    height: 27px;
    width: 124px;
}

</style>
