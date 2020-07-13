<template>
  <div class="v-video-wrapper-list-link-frame">
    <div class="v-video-wrapper-list-link-frame-text" >{{link_data.index}} - кадр</div>
    <button @click="sendDataToParent" class="v-video-wrapper-list-link-frame-button">показать</button>
  </div>
</template>

<script>
export default {
  name: 'v-video-frame',
  data () {
    return {
    }
  },
  props: {
    link_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  metaInfo: {
    title: 'Видео'
  },
  methods: {
    sendDataToParent () {
      this.$emit('sendPath', this.link_data.path)
    }
  }
}
</script>

<style >
.v-video-wrapper-list-link-frame-button{
  position: absolute;
  width: 100px;
  height: 25px;
  margin-top: 10px;
  margin-left: 300px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: cornflowerblue;
}
.v-video-wrapper-list-link-frame{
  position: relative;
  width: 400px;
  height: 40px;
}
.v-video-wrapper-list-link-frame-text{
    position: absolute;
    font-size: 20px;
}

</style>
