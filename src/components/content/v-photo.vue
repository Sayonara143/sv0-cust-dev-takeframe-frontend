<template>
    <div class="v-photo">
      <div class="v-photo-button">
        <div @click="addOne" class="v-photo-button-one button">Загрузить №1</div>
        <div v-if='this.isFilesRefsInputOne' class="v-photo-button-is-Files-Refs-Input-One-Green circle"></div>
        <div v-if='!(this.isFilesRefsInputOne)' class="v-photo-button-is-Files-Refs-Input-One-Red circle"></div>
        <img @click="deletefileInputOne" :src="require('../../assets/delete.png')" v-if='this.isFilesRefsInputOne' class="v-photo-button-is-Files-Refs-Input-Two-delete"/>
        <div @click="addTwo" class="v-photo-button-two button">Загрузить №2</div>
        <div v-if='this.isFilesRefsInputTwo' class="v-photo-button-is-Files-Refs-Input-Two-Green circle"></div>
        <div v-if='!(this.isFilesRefsInputTwo)' class="v-photo-button-is-Files-Refs-Input-Two-Red circle"></div>
        <img  @click="deletefileInputTwo" :src="require('../../assets/delete.png')" v-if='this.isFilesRefsInputTwo' class="v-photo-button-is-Files-Refs-Input-Two-delete">
        <div @click="returnResult" class="v-photo-button-change button">Сравнить</div>
      </div>
      <div class="v-photo-result">
        <img class="v-photo-result-img" v-if='!(this.isResult_text)' :src="'http://localhost:8080/'+ this.pathResult" alt="" srcset="">
        <div class="v-photo-result-text" v-if="this.isResult_text">{{this.resultText}}</div>
      </div>
      <form>
        <input type="file"  ref="inputOne" @change="onChangeOne" accept="image/jpeg" class="">
        <input type="file" ref="inputTwo" @change="onChangeTwo" accept="image/jpeg" class="">
      </form>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  name: 'v-photo',
  data () {
    return {
      isResult_text: true,
      isFilesRefsInputOne: false,
      isFilesRefsInputTwo: false,
      fileInputOne: '',
      fileInputTwo: '',
      pathResult: '',
      resultText: 'Здесь будет фотграфия с отличиям'
    }
  },
  metaInfo: {
    title: 'Фото'
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ]),
    deletefileInputOne () {
      this.fileInputOne = []
      this.isFilesRefsInputOne = false
    },
    deletefileInputTwo () {
      this.fileInputTwo = []
      this.isFilesRefsInputTwo = false
    },
    addOne () {
      this.$refs.inputOne.click()
    },
    addTwo () {
      this.$refs.inputTwo.click()
    },
    onChangeOne (event) {
      this.fileInputOne = this.$refs.inputOne.files[0]
      this.isFilesRefsInputOne = true
    },
    onChangeTwo (event) {
      this.fileInputTwo = this.$refs.inputTwo.files[0]
      this.isFilesRefsInputTwo = true
    },
    returnResult () {
      if (this.isFilesRefsInputTwo && this.isFilesRefsInputOne) {
        const filedata = new FormData()
        filedata.append('file', this.fileInputOne)
        filedata.append('file', this.fileInputTwo)
        let token = localStorage.getItem('accessToken')
        axios('http://localhost:8080/api/v1/users/photoResult', {
          method: 'POST',
          headers: {
            'Authorization': 'Authorization' + ' ' + token,
            'Content-Type': 'multipart/form-data'
          },
          data: filedata,
          cache: false,
          processData: false,
          contentType: false
        })
          .then((result) => {
            console.log(result.data)
            this.pathResult = result.data.pathResult
            this.isResult_text = false
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.$store.commit('SET_ISAUTH_TO_STATE', false)
              this.$router.push({path: '/login'})
            }
          })
      } else {
        alert('Вы не загрузили изображения')
      }
    }
  },
  mounted () {
    this.GET_USER_FROM_API()
  }
}
</script>

<style >
.v-photo{
  grid-row: 1/10;
  grid-column: 1/10;
  position: relative;
  width: 1140px;
  padding: 0px;
}
.v-photo input{
  position: absolute;
  display: none;
}
.v-photo-button{
  margin-left:0%;
  position: absolute;
  margin-top: 40px;
}
.v-photo-button-one{
  position: relative;
  margin-top: 0px;
  width: 360px;
  height: 68px;
  background-color: #F3F3D5;
  border-radius: 10px;
  font-size: 30px;
  line-height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.v-photo-button-two{
  position: relative;
  margin-top: 20px;
  width: 360px;
  height: 68px;
  background-color: #F3F3D5;
  text-align: center;
  border-radius: 10px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-photo-button-change{
  position: relative;
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;
  width: 360px;
  height: 68px;
  background-color: #F3F3D5;
  border-radius: 10px;
  font-size: 30px;
}
.button:hover{
  border: 1px solid #EB6B23;
}
.v-photo-result{
  margin-top: 40px;
  margin-left:100%;
  transform: translateX( -100%);
  background-color: #F3F3D5;
  width: 620px;
  min-height: 602px;
  position: relative;
  border-radius: 10px;
}
.v-photo-result-img{
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-left: 50%;
  transform: translate(-50%);
}
.v-photo-result-text{
  position: absolute;
  display: block;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
}
.v-photo-button-is-Files-Refs-Input-One-Green{
  position: absolute;
  background-color: green;
  margin-left: 370px;
  margin-top: -49px
}
.v-photo-button-is-Files-Refs-Input-One-Red{
  position: absolute;
  background-color: red;
  margin-left: 370px;
  margin-top: -49px
}
.v-photo-button-is-Files-Refs-Input-Two-Green{
  position: absolute;
  background-color: green;
  margin-left: 370px;
  margin-top: -49px
}
.v-photo-button-is-Files-Refs-Input-Two-Red{
  position: absolute;
  background-color: red;
  margin-left: 370px;
  margin-top: -49px
}
.circle{
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.v-photo-button-is-Files-Refs-Input-Two-delete{
  width: 30px;
  height: 30px;
  position: absolute;
  margin-left: 410px;
  margin-top: -49px
}
.v-photo-button-is-Files-Refs-Input-One-delete{
  width: 30px;
  height: 30px;
  position: absolute;
  margin-left: 410px;
  margin-top: -49px
}
</style>
