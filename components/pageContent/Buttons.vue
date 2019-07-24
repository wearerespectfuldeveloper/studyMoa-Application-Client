<template>
  <div 
    class="alarm-container"
    :style="{'width': width, 'height': height}"  
  >
    <div class="buttons">
      <button class="button">{{buttonText1}}</button>
    </div>
    
  </div>


</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    buttonText1: {
      type: String,
      default: '수정하기'
    }
  }
}
</script>

<style lang="scss" scoped>
.alarm-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  .buttons {
    display: flex;
    flex-flow: row;
    width: 100%;
  }
    .button{
       width: 100%;
       height: 35px;
       background: green;
       color: white;
       border: 1px  gray ;
       border-radius: 20px;
    }
  
}
</style>