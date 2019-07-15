<template>
  <div class = "document-container" :style="{'width': width, 'height': height}">
    <h1>{{heading}}</h1>
    <img :src="imgSrc"/>
    <p>{{paragraph}}</p>
    <button v-show = "false">{{buttonText}}</button>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins';

export default {
  mixins: [molecule],
  props: {
    heading: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.document-container {
  display: flex;
  flex-flow: column;

  p {
    font-size: 12px;
    padding: 10px 0 10px 0;
  }

  margin-bottom: 20px;
}
</style>
