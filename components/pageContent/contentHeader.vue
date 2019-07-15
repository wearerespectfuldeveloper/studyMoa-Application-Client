<template>
  <div class="content-header-container" :style="{'width': width, 'height': height}">
    <div class="row">
      <h3 class="title">{{title}}</h3>
      <span class="sub-title">{{subTitle}}</span>
    </div>
      
    <a href="#" class="meta-button">{{buttonText}}</a>
        
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

  .meta-button {
    @include text-anchor-button($studyIntroParticipateButton);
    @include button-color-transition($studyIntroParticipateButton, white);
    font-size: 12px;
    padding: 10px;
  }
}
</style>
