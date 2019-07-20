<template>
  <div 
    class="form-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="input" v-if="show.showInput">
      <label for="">{{inputLabel}}</label>
      <input type="text" />
    </div>
    
    <div class="textarea" v-if="show.showTextarea">
      <label for="">{{textareaLabel}}</label>
      <textarea name="" id=""></textarea>
    </div>
    
    <div class="config">
      <div class="config1" v-if="show.showConfig1">
        <label for="">{{config1Label}}</label>
        <input type="checkbox" name="" id="" />
      </div>
      <div class="config2" v-if="show.showConfig2">
        <label for="">{{config2Label}}</label>
        <input type="text" />
      </div>
    </div>
  </div>  
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    inputLabel: {
      type: String,
      default: '인풋 텍스트'
    },
    textareaLabel: {
      type: String,
      default: '텍스트'
    },
    config1Label: {
      type: String,
      default: '설정'
    },
    config2Label: {
      type: String,
      default: '설정'
    },
    show: {
      type: Object,
      default: function () {
        return {
          showInput: true,
          showTextarea: true,
          showConfig1: true,
          showConfig2: true
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
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  .input {
    display: flex;
    flex-flow: column;
    width: 100%;

    label {
      @include boldLabel;
    }
    input {
      @include bottomBorderInput;
    }
    margin-bottom: 20px;

  }

  .textarea {
    display: flex;
    flex-flow: column;
    width: 100%;
    
    label {
      @include boldLabel;
      
    }
    textarea {
      @include bottomBorderTextarea; 
    }
    margin-bottom: 20px;
  }

  .config {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    width: 100%;

    .config1 {
      display: flex;
      align-items: center;
      
      label {
        @include boldLabel;
      }
      input {
        @include biggerCheckbox;
      }
    }

    .config2 {
      display: flex;
      align-items: center;

      label {
        @include boldLabel;

      }

      input {
        @include bottomBorderInput;
      }
    }
  }
}
</style>