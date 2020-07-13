<template>
    <div class="v-profile">
        <router-view></router-view>
        <div class="v-profile-settings">
            <router-link :to="{name: 'v-personal-data'}">
                <div class="text first">Личные данные</div>
            </router-link>
            <router-link :to="{name: 'v-history-photo'}">
                <div class="text">История фотографии</div>
            </router-link>
            <router-link :to="{name: 'v-history-video'}">
                <div class="text">История видео</div>
            </router-link>
            <router-link :to="{name: 'v-security'}">
                <div class="text">Безопасность</div>
            </router-link>
            <router-link :to="{name: 'v-bloggers'}">
                <div class="text">Подписки</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'v-profile',
  metaInfo: {
    title: 'Профиль'
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ])
  },
  mounted () {
    this.GET_USER_FROM_API()
  }

}
</script>

<style >
.v-profile{
    position: relative;
    display: grid;
    width: 1140px;
    grid-template-rows: repeat(9, auto);
    grid-row-gap: 30px;
    grid-template-columns: repeat(9, auto);
    grid-column-gap: 30px;
    margin-top: 0px;
}
.v-profile-settings{
    position: absolute;
    grid-column: 0/4;
    grid-row: 2/6;
    width: 361px;
    height: 399px;
    background-color: #F3F3D5;
    border-radius: 10px;
}
.text{
    margin-top: 30px;
    margin-left: 40px;
    font-size: 32px;
    line-height: 37px;
    display: flex;
    align-items: center;
    color: #000000;
}
.first{
    margin-top: 32px;
}
</style>
