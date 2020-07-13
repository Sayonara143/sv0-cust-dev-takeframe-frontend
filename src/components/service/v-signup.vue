<template>
    <div class="v-signup">
      <router-view></router-view>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'v-signup',
  metaInfo: {
    title: 'Регистрация'
  },
  mounted () {
    this.GET_USER_FROM_API()
      .then(() => {
        if (this.$store.state.isAuth) {
          this.$router.push({ path: '/' })
          console.log('log')
        } else {
          this.link()
        }
      })
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ]),
    link () {
      this.$router.push({ path: '/StepOne' })
    }
  }
}
</script>

<style >
  .v-signup{
    position: absolute;
    grid-row: 2/6;
    grid-column: 3/7;
    width: 620px;
    height: 502px;
    background-color: #000000;
    border-radius: 25px;
    background-color: #FBF5E5;
  }
</style>
