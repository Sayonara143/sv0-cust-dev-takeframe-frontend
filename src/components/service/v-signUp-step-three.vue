<template>
    <div class="v-sign">
        <div class="v-signup-header">Регистрация</div>
        <div class="v-signup-header-step">шаг 3</div>
        <input type="text" class="v-login-input" placeholder="Фамилия">
        <input type="text" class="v-login-input" placeholder="Имя">
        <input type="text" class="v-login-input" placeholder="Отчество">
        <input type="text" class="v-login-input" placeholder="login">
        <router-link :to="{name: 'v-signUp-step-two'}">
            <button>Регистрация</button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'v-sign',
  metaInfo: {
    title: 'Регистрация | шаг 3 | Подтверждение почты'
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
  .v-signup-header{
    margin-top: 20px;
    width: 270px;
    font-size: 48px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .v-signup-header-step{
    margin-top: 10px;
    width: 60px;
    font-size: 20px;
    margin-left: 50%;
    transform: translate(-50%, 0%);
  }
  .v-signup input{
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
  .v-signup button{
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
      margin-top:25px;
  }
  .v-signup button:hover{
    background: linear-gradient(180deg, #ffee02 0%, #FFB039 100%);
  }
  input:focus { outline: none; font-size: 20px; }
  input[type="login"]{
    margin-top: 30px;
  }
</style>
