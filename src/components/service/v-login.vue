<template>
    <div class="v-login">
        <div class="v-login-header">Авторизация</div>
        <input type="login" v-model="postBody.login" class="v-login-input-login">
        <input type="password" v-model="postBody.password" class="v-login-input-password">
        <button @click='this.auth'>Log In</button>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  name: 'v-login',
  data () {
    return {
      postBody: {
        login: '',
        password: ''
      }
    }
  },
  metaInfo: {
    title: 'Авторизация'
  },
  mounted () {
    this.GET_USER_FROM_API()
      .then(() => {
        if (this.$store.state.isAuth) {
          this.$router.push({ path: '/' })
          console.log('log')
        }
      })
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ]),
    auth () {
      if (this.$store.state.isAuth) {
        this.$router.push({ name: 'v-main' })
      } else {
        let str = this.postBody
        axios
          .post('http://localhost:8080/api/v1/oauth/tokens/users', str)
          .then(response => {
            let info = response
            localStorage.setItem('accessToken', info.data.accessToken)
            localStorage.setItem('refreshToken', info.data.refreshToken)
            this.$store.commit('SET_ISAUTH_TO_STATE', true)
            this.$router.push({ path: '/' })
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
      }
    }
  }
}
</script>

<style >
  .v-login{
    position: relative;
    grid-row: 2/6;
    grid-column: 3/8;
    width: 620px;
    height: 394px;
    background-color: #000000;
    border-radius: 25px;
    background-color: #FBF5E5;
  }
  .v-login-header{
    margin-top: 30px;
    width: 270px;
    font-size: 48px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .v-login input{
    margin-top: 20px;
    padding: 20px;
    margin-left: 50%;
    transform: translate(-50%, 0);
    width: 500px;
    height: 50px;
    background-color: #EBE3CC;
    border-radius: 10px;
    border: 1px solid #515050;
  }
  .v-login button{
      border-radius: 5px ;
      margin-left: 50%;
      transform: translate(-50%, 0%);
      width: 276px;
      height: 62px;
      color: #000000;
      background: linear-gradient(180deg, #FFC700 0%, #FFB039 100%);
      box-shadow: 0px 5px 5px rgba(243, 209, 38, 0.25);
      border-radius: 5px;
      border: none;
      font-family: Tenor Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      margin-top:45px;
  }
  .v-login button:hover{
    background: linear-gradient(180deg, #ffee02 0%, #FFB039 100%);
  }
  input:focus { outline: none; font-size: 20px; }
  input[type="login"]{
    margin-top: 30px;
  }
</style>
