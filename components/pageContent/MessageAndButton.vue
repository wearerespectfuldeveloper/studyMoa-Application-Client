<template>
  <div 
    class="message-and-button-container"
    :style="{'width': width, 'height': height}"  
  >
    <h2 class="message">{{message}}</h2>
    <div class="buttons">
      <button class="button1">{{buttonText1}}</button>
      <button class="button2" v-if="false">{{buttonText2}}</button>
    </div>
    
  </div>
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    message: {
      type: String,
      default: '정말 탈퇴하시겠습니까?'
    },
    buttonText1: {
      type: String,
      default: '확인'
    },
    buttonText2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.message-and-button-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  .message {
    margin-bottom: 50px;
  }
  .buttons {
    display: flex;
    flex-flow: row;
    width: 100%;

    .button1 {
      @include border-transition-button($confirmButtonColor);
    }

    .button2 {
      @include border-transition-button($confirmButtonColor);
    }
  }
}
</style>