<template>
    <div class="v-description-ticket">
      <div class="v-main-takeFrame-decription block">
        <h1>Общее понятие</h1>
        <p>takeFrame - это сервис, который создан для обнаружений отличий на изображениях, а также получения кадра из видео, для чего?
          С помощью этих двух основных замечательных функций вы сможете выигрывать у блогерров (кто шарит, тот поймет).
          Но у нас также есть ряд других полезных интсрументов (см.раздел Инструменты)
        </p>
      </div>
      <div class="v-main-takeFrame-decription block">
        <h1>Тариф: Новичок</h1>
        <p>takeFrame - это сервис, который создан для обнаружений отличий на изображениях, а также получения кадра из видео, для чего?
          С помощью этих двух основных замечательных функций вы сможете выигрывать у блогерров (кто шарит, тот поймет).
          Но у нас также есть ряд других полезных интсрументов (см.раздел Инструменты)
        </p>
      </div>
      <div class="v-main-photo-decription block">
        <h1>Тариф: Умный</h1>
      </div>
      <div class="v-main-video-decription block">
        <h1>Тариф: Мастер</h1>
      </div>
      <div class="v-main-bonus-decription block">
        <h1>Всё о Бонусах</h1>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'v-description-ticket',
  metaInfo: {
    title: 'Описание тарифов'
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
.v-main{
  grid-row: 1/10;
  grid-column: 1/10;
  position: relative;
  width: 1140px;
  padding: 0px;
}

.block{
  padding-left: 10px;
  margin-top: 40px;
  width: 1139px;
  height: 170px;
  position: relative;
  background-color: #F3F3D5;
  border-radius: 10px;

}
p{
  margin-top: 60px;
  position: absolute;
  margin-left: 40px;
  line-height: 24px;
  font-size: 20px;
}
h1{
  position: absolute;
  margin-top: 10px;
  margin-left: 20px;
}
</style>
