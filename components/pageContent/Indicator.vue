<template>
  <div 
    class="indicator-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="indicator">
      <label for="">{{indicator1Label}}</label><span>{{indicator1Text}}</span>
    </div>
    <div class="indicator">
      <label for="">{{indicator2Label}}</label><span>{{indicator2Text}}</span>
    </div>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    indicator1Label: {
      type: String,
      default: '기준 1 :'
    },
    indicator1Text: {
      type: String,
      default: '무엇'
    },
    indicator2Label: {
      type: String,
      default: '기준 2 :'
    },
    indicator2Text: {
      type: String,
      default: '무엇'
    }
  }
}
</script>

<style lang="scss" scoped>
.indicator-container {
  display: flex;
  justify-content: space-around;
  
  .indicator {
    label {
      margin-right: 10px;
    }
  }
}
</style>
