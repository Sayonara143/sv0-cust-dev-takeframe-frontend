
<template>
  <div  class="v-header-container-auth-user-out">
    <i  @click="this.out">выход</i>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
const path = '/'
export default {
  name: 'v-out',
  methods: {
    ...mapActions([
      'OUT_USER_FROM_API'
    ]),
    out () {
      this.OUT_USER_FROM_API()
        .then((response) => {
          if (response.data.status === 'ok') {
            if (this.$route.path !== path) {
              this.$router.push({ name: 'v-main' })
              localStorage.removeItem('accessToken')
              localStorage.removeItem('refreshToken')
            }
          }
        })
        .catch(() => {})
    }
  }
}
</script>

<style >
.v-header-container-auth-user-out{
    position: absolute;
    margin-top: 0px;
    margin-left: 100px;
    font-size: 20px;
    height: 27px;
    width: 124px;
    color: #ffffff;
}

</style>
