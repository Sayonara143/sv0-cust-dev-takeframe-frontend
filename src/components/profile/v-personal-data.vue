<template>
    <div class="v-personal-data">
      <div class="v-personal-data-surname text">Фамилия: {{this.$store.state.personal_data.surname}}</div>
      <div class="v-personal-data-name text">Имя: {{this.$store.state.personal_data.name}}</div>
      <div class="v-personal-data-patronimyc text">Отчество: {{this.$store.state.personal_data.patronymic}}</div>
      <div class="v-personal-data-email text">email: {{this.$store.state.personal_data.email}}</div>
      <div class="v-personal-data-numberPhone text">Номер Телефона: {{this.$store.state.personal_data.phone}}</div>
      <div class="v-personal-data-ticket text">Тариф: {{this.$store.state.personal_data.ticket}}</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'v-personal-data',
  metaInfo: {
    title: 'Профиль | Личные данные'
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API',
      'GET_PERSONAL_DATA_FROM_API'
    ])
  },
  mounted () {
    this.GET_USER_FROM_API()
      .then(() => {
        if (!this.$store.state.isAuth) {
          this.$router.push({ path: '/' })
          console.log('log')
        }
        this.GET_PERSONAL_DATA_FROM_API()
      })
  }

}
</script>

<style >

.v-personal-data{
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
