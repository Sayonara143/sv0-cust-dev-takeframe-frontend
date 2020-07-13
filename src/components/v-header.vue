<template>
    <div class="v-header">
      <div class="v-header-container">
        <router-link :to="{name: 'v-main'}">
            <div class="v-header-container-logo">takeFrame</div>
          </router-link>
          <div class="v-header-container-link-main ">
            <router-link :to="{name: 'v-main'}">
                <a href="#" class="link" >Главная</a>
            </router-link>
          </div>
          <div class="v-header-container-link-ticket ">
            <router-link :to="{name: 'v-ticket'}">
              <div><a href="#" class="link">Тарифы</a></div>
            </router-link>
          </div>
          <div class="v-header-container-link-photo">
            <router-link :to="{name: 'v-photo'}">
              <a href="#" class="link">Фото</a>
            </router-link>
          </div>
          <div class="v-header-container-link-video">
            <router-link :to="{name: 'v-video'}">
              <a href="#" class="link">Видео</a>
            </router-link>
          </div>
          <div class="v-header-container-link-tools">
            <router-link :to="{name: 'v-tools'}">
              <a href="#" class="link">Инструменты</a>
            </router-link>
          </div>
          <div v-if="!(this.$store.state.isAuth)" class="v-header-container-auth-link ">
            <router-link :to="{name: 'v-login'}">
              <a href="#" class="link">LogIn</a>
            </router-link>
            <a >/</a>
            <router-link :to="{name: 'v-signUp'}">
              <a href="#" class='v-header-container-auth-link-login-signup link'>SignUp</a>
            </router-link>
          </div>
          <v-header-auth-user v-if="(this.$store.state.isAuth)"/>
        </div>
    </div>
</template>

<script>
import vHeaderAuthUser from './v-header-auth-user'
export default {
  name: 'v-header',
  components: {
    vHeaderAuthUser
  }
}
</script>

<style >
.v-header{
  position: relative;
    margin-top: 0px;
    width: 100%;
    height: 70px;
    background-color: #000000;
}
.v-header-container{
  display: grid;
  grid-template-columns: repeat(9, auto);
  grid-column-gap: 30px;
  margin: 0% auto;
  width: 1140px;
}
.v-header-container-logo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  text-align: center;
  font-size: 48px;
  grid-column: 0/2;
}
a{
  vertical-align:middle;
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
}
.v-header-container-link-main{
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-column: 3/4;
}
.v-header-container-link-ticket{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  grid-column: 4/5;
  transform: translateX(-20px);
}
.v-header-container-link-photo{
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  grid-column: 5/6;
  transform: translateX(-40px);
}
.v-header-container-link-video{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-column: 6/7;
  transform: translateX(-60px);
}
.v-header-container-link-tools{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-column: 7/8;
  transform: translateX(-80px);
}
.v-header-container-auth-link{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  grid-column: 8/10;
  width: 100px;
}
.link:hover{
  border-bottom: 1px solid #F2AD85;
}
</style>
