<template>
    <div class="v-history-video">
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'v-history-video',
  metaInfo: {
    title: 'Профиль | История видео'
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ])
  },
  mounted () {
    this.GET_USER_FROM_API()
      .then(() => {
        if (!this.$store.state.isAuth) {
          this.$router.push({ path: '/' })
          console.log('log')
        }
      })
  }

}
</script>

<style >

.v-history-video{
    position: absolute;
    grid-column: 4/10;
    grid-row: 2/6;
    width: 750px;
    height: 532px;
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
