
<template>
  <div class="meta" :style="{'width': width, 'height': height}">
    <div class="row">
      <h3 class="title">{{title}}</h3>
      <span class="sub-title">{{subTitle}}</span>
    </div>
      
    <a href="#" class="meta-button">{{buttonText}}</a>

    <slot name="extra"></slot>
    
  </div>
</template>

<script>
import { organism } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [organism],
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
    }
  }
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;

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
