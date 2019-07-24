<template>
  <div 
    class="form-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="textarea" v-if="show.showTextarea">
      <label for="">{{textareaLabel}}</label>
      <textarea></textarea>
    </div>
    
 
  </div>  
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {

    textareaLabel: {
      type: String,
      default: '나의 소개 '
    },
    show: {
      type: Object,
      default: function () {
        return {
          showTextarea: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  
  .textarea {
    display: flex;
    flex-flow: column;
    width: 100%;
    border: 1px gray;
    
  
    textarea {
      height: 150px;
    //  @include bottomBorderTextarea; 
    }
    margin-bottom: 20px;
  }

}
</style>