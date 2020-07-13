<template>
    <div class="v-video">
      <div class="v-video-wrapper">
        <div @click="addOne" class="v-video-wrapper-button">Загрузить видео</div>
        <div v-if='this.isFilesRefsInputOne' class="v-video-wrapper-is-Files-Refs-Input-One-Green circle"></div>
        <div v-if='!(this.isFilesRefsInputOne)' class="v-video-wrapper-is-Files-Refs-Input-One-Red circle"></div>
        <img @click="deletefileInputOne"
              :src="require('../../assets/delete.png')"
              v-if='this.isFilesRefsInputOne'
              class="v-video-button-is-Files-Refs-Input-One-delete"/>
        <div @click="returnResult" class="v-video-button-change button">Разделить</div>
        <div v-if='this.responseResult' class="v-video-wrapper-list">
          <p class="v-video-wrapper-list-header">Список кадров:</p>
          <v-video-frame
            v-for="link in paginitedLinks"
            :key="link.index"
            :link_data="link"
            @sendPath="showImage"
          />
          <div v-if='!(this.isResult_text)' class="v-video-wrapper-list-pagination">
            <div class="v-video-wrapper-list-page"
              v-for="page in pages"
              :key="page"
              @click="pageclick(page)">
              {{page}}
            </div>
          </div>
        </div>
      </div>
        <div class="v-video-slider">
          <div v-if='this.isResult_text' class="v-video-slider-text">Здесь появятся кадры видео</div>
          <img class="v-video-result-video" v-if='!(this.isResult_text)' :src="'http://localhost:8080/'+ this.pathResult" alt="" srcset=""/>
          <div class="v-video-slider-button"></div>
        </div>
      <form>
        <input type="file"  ref="inputOne" @change="onChangeOne" accept="video/mp4" class="">
      </form>
    </div>
</template>

<script>
import vVideoFrame from './v-video-frame'
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'v-video',
  data () {
    return {
      links: [],
      isResult_text: true,
      isFilesRefsInputOne: false,
      fileInputOne: '',
      responseResult: false,
      pathResult: '',
      linksPerPage: 10,
      numberPage: 1
    }
  },
  components: {
    vVideoFrame
  },
  metaInfo: {
    title: 'Видео'
  },
  methods: {
    ...mapActions([
      'GET_USER_FROM_API'
    ]),
    pageclick (page) {
      this.numberPage = page
      console.log(this.numberPage)
    },
    addOne () {
      this.$refs.inputOne.click()
    },
    showImage (data) {
      console.log(data)
      this.pathResult = data
      console.log(this.pathResult)
    },
    onChangeOne (event) {
      this.fileInputOne = this.$refs.inputOne.files[0]
      this.isFilesRefsInputOne = true
    },
    deletefileInputOne () {
      this.fileInputOne = []
      this.isFilesRefsInputOne = false
      this.pathResult = ''
      this.isResult_text = true
      this.responseResult = false
    },
    returnResult () {
      if (this.isFilesRefsInputOne) {
        const filedata = new FormData()
        filedata.append('file', this.fileInputOne)
        console.log(filedata[0])
        let token = localStorage.getItem('accessToken')
        axios('http://localhost:8080/api/v1/users/videoResult', {
          method: 'POST',
          headers: {
            'Authorization': 'Authorization' + ' ' + token,
            'Content-Type': 'multipart/form-data'
          },
          data: filedata,
          cache: false,
          processData: false,
          contentType: true
        })
          .then((result) => {
            console.log(result.data)
            this.links = result.data
            this.pathResult = this.links[0].path
            this.isResult_text = false
            this.responseResult = true
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
  },
  computed: {
    pages () {
      return Math.ceil(this.links.length / 10)
    },
    paginitedLinks () {
      let from = (this.numberPage - 1) * this.linksPerPage
      let to = from + this.linksPerPage
      return this.links.slice(from, to)
    }
  }
}
</script>

<style >
.v-video{
  grid-row: 1/10;
  grid-column: 1/10;
  position: relative;
  width: 1140px;
  min-height: 100%;
  padding: 0px;
}
.v-video-result-video{
  position: absolute;
  display: block;
  margin-top: 50%;
  max-width: 100%;
  max-height: 100%;
  margin-left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1000;
}
.v-video-button-change{
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
.v-video-wrapper{
  position: relative;
  min-height: 100%;
}
.v-video-wrapper-button{
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
.v-video-wrapper-button:hover{
  border: 1px solid #EB6B23;
}
.v-video-wrapper-list-header{
  position:relative;
  margin-top: 10px;
  font-size: 30px;
}
.v-video-slider{
  margin-top: 40px;
  margin-left:100%;
  transform: translateX( -100%);
  background-color: #F3F3D5;
  width: 620px;
  min-height: 569px;
  position: relative;
  border-radius: 10px;
}
.v-video-slider-text{
  position: absolute;
  width: 400px;
  height: 50px;
  text-align: center;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
}
.v-video-wrapper{
  margin-left: 0%;
  position: absolute;
  margin-top: 40px;
}
.v-video-wrapper-is-Files-Refs-Input-One-Green{
  position: absolute;
  background-color: green;
  margin-left: 370px;
  margin-top: -49px
}
.v-video-wrapper-is-Files-Refs-Input-One-Red{
  position: absolute;
  background-color: red;
  margin-left: 370px;
  margin-top: -49px;
  z-index: 4;
}
.v-video-button-is-Files-Refs-Input-One-delete{
  width: 30px;
  height: 30px;
  position: absolute;
  margin-left: 410px;
  margin-top: -49px
}
.circle{
  border-radius: 50%;
  width: 30px;
  height: 30px;
}
.v-video input{
  position: absolute;
  display: none;
}
.v-video-wrapper-list-pagination{
  position: absolute;
  width: 100px;
  height: 50px;
  display: flex;
}
.v-video-wrapper-list-page{
  border: 1px solid #000000;
  text-align: center;
  width: 25px;
  height: 29px;
  margin-left: 10px;
  font-size: 22px;
  position: relative;
}
.v-video-wrapper-list-page:hover{
  cursor: pointer;
  background-color: darkgray;
  color: #ffffff;
}
</style>
