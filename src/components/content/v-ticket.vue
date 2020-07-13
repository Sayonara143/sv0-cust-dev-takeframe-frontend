<template>
    <div class="v-ticket">
      <div class="v-ticket-bonus bonus-block">
        <h1>Бонусы</h1>
        <div class="v-ticket-bonus-id">
          <p class="v-ticket-bonus-id-text-name">alsbykov</p>
          <p class="v-ticket-bonus-id-text-plus-one">+1 использование/день </p>
          <button class="v-ticket-bonus-id-button bonus-button">Подписаться</button>
        </div>
      </div>
      <div class="v-tivket-container">
        <div class="v-ticket-container-junior ticket">
          <div class="v-ticket-container-junior-header ticket-container-header">
            <p class="v-ticket-header-text">Новичок</p>
          </div>
          <div class="v-ticket-container-junior-text for-more">
            <router-link :to="{name: 'v-descriptionTicket'}">
              <p class="v-ticket-container-more">подробнее</p>
            </router-link>
            <p></p>
            <p></p>
          </div>
          <button class="v-ticket-container-button">Купить</button>
        </div>
        <div class="v-ticket-container-middle ticket">
          <div class="v-ticket-container-middle-header ticket-container-header">
            <p class="v-ticket-header-text">Умный</p>
          </div>
          <div class="v-ticket-container-middle-text for-more">
            <p></p>
            <p></p>
            <router-link :to="{name: 'v-descriptionTicket'}">
              <p class="v-ticket-container-more">подробнее</p>
            </router-link>
          </div>
          <button class="v-ticket-container-button ">Купить</button>
        </div>
        <div class="v-ticket-container-senjor ticket">
          <div class="v-ticket-container-senjor-header ticket-container-header">
            <p class="v-ticket-header-text">Мастер</p>
          </div>
          <div class="v-ticket-container-senjor-text for-more">
            <p></p>
            <p></p>
            <router-link :to="{name: 'v-descriptionTicket'}">
              <p class="v-ticket-container-more">подробнее</p>
            </router-link>
          </div>
          <button class="v-ticket-container-button">Купить</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'v-ticket',
  metaInfo: {
    title: 'Тарифы'
  },
  methods: {
  },
}
</script>

<style scoped>
.v-ticket{
  grid-row: 1/10;
  grid-column: 1/10;
  position: relative;
  width: 1140px;
  padding: 0px;
}
.v-ticket-container-junior{
  background: linear-gradient(180.14deg, #FFFFFF 0.11%, rgba(237, 159, 115, 0.65) 50.12%);
}
.v-ticket-container-middle{
  background: linear-gradient(179.86deg, #F2DADA 0.11%, rgba(98, 222, 40, 0.65) 50.12%);
}
.v-ticket-container-senjor{
  background: linear-gradient(179.86deg, rgba(235, 253, 236, 0.75) 0.11%, rgba(38, 103, 180, 0.4875) 50.12%);
}
.v-ticket-header-text{
  position: absolute;
  margin-top: 0px;
  width: 110px;
  color: #ffffff;
  margin-left: 50%;
  transform: translate(-50%,0);
  font-size: 30px;
}
.ticket{
  margin-top: 40px;
  width: 360px;
  height: 404px;
  background-color: #F3F3D5;
  border-radius: 10px;
}
.v-tivket-container{
  display: flex;
}
.ticket-container-header{
  align-items: center;
  display: flex;
  position: absolute;
  margin: 0px;
  width: 360px;
  height: 70px;
  background-color: #1E261D;
  border-radius: 10px 10px 0px 0px;
}
.bonus-block{
  padding-left: 10px;
  margin-top: 40px;
  width: 1140px;
  height: 170px;
  position: relative;
  background-color: #F3F3D5;
  border-radius: 10px;
}
p{
  margin-top: 60px;
  position: absolute;
  margin-left: 100px;
  line-height: 24px;
  font-size: 20px;
  color: #000000;
}
h1{
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
}

.v-ticket-container-middle{
  margin-left: 30px;
}
.v-ticket-container-senjor{
  margin-left: 30px;
}
.v-ticket-container-button{
  background: linear-gradient(180deg, #FFC700 0%, #FFB039 100%);
  box-shadow: 0px 5px 5px rgba(243, 209, 38, 0.25);
  border-radius: 10px;
  width: 300px;
  height: 70px;
  margin-left: 50%;
  transform: translate(-50%,0);
  margin-top:310px;
  border: none;
  font-size: 25px;
  line-height: 35px;
}
.v-ticket-container-button:hover{
    background: linear-gradient(180deg, #ffee02 0%, #FFB039 100%);
}
.bonus-button{
  border: none;
  position: absolute;
  margin-left: 900px;
  width: 120px;
  height: 40px;
  font-size: 15px;
  margin-top:30px;
  border-radius: 10px;
}
.v-ticket-bonus{
  position: relative;
}
.v-ticket-bonus-id{
  position: absolute;
  margin-top:60px;
  width: 1020px;
  margin-left: 60px;
  height: 100px;
}
.v-ticket-bonus-id-text-name{
  margin-top: 30px;
  height: 40px;
  margin-left: 60px;
}
.v-ticket-bonus-id-text-plus-one{
  margin-left: 250px;
  margin-top: 30px;
  height: 40px;
}
.v-ticket-container-more{
  position: absolute;

  width: 100px;
  margin-top: 280px;
  margin-left: 50%;
  transform: translate(-50%,0);
}
.for-more{
  position: relative;
}
</style>
