<template>
  <div class="content-header-container" :style="{'width': width, 'height': height}">
    <div class="row">
      <h3 class="title" >{{title}}</h3>
      <span class="sub-title">{{subTitle}}</span>
    </div>
    <div>
      <a class="meta-button1" @click="buttonClickEvent">{{buttonText}}</a>
      <a class="meta-button2" @click="buttonClickEvent">{{buttonText2}}</a>
    </div>
    
        
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    },
    buttonText2: {
      type: String,
      default: ''
    },
    buttonClickEvent: {
      type: Function,
      default: function () {
        console.log('nothing happened')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-header-container {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;

  .row {
    display: flex;
    align-items: center;
  }

  .title {
    padding: 10px 0 10px 0;
    margin-right: 10px;
  }

  .sub-title {
    font-size: 12px;
    padding: 10px 0 10px 0;
  }

  .meta-button1 {
    @include text-anchor-button($studyIntroParticipateButton);
    @include button-color-transition($studyIntroParticipateButton, white);
    font-size: 12px;
    padding: 10px;
  }
  .meta-button2 {
    @include text-anchor-button($studyIntroParticipateButton);
    @include button-color-transition($studyIntroParticipateButton, white);
    font-size: 12px;
    padding: 10px;
  }
}
</style>
