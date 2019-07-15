<template>
  <div class="text-block-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="text-block" 
      v-for="block in blocks" 
      :key="block.id"
      :style="{'width': blockWidth, 'height': blockHeight}"
    >
      <div class="title-and-sub-title">
        <h5 class="title">{{block.week}}</h5>
        <h6 class="sub-title">{{block.done}}</h6>
      </div>
      
      <div class="content1-and-content2">
        <span class="content1">{{block.date}}</span>
        <span class="content2">{{block.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    blockWidth: {
      type: String,
      default: ''
    },
    blockHeight: {
      type: String,
      default: ''
    },
    blocks: {
        type: Array,
        default: () => []
    }
  },
  data () {
    return {
        
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.text-block-container {
  
  display: flex;
  flex-flow: column;
  align-items: center;

  .text-block {
    display: flex;
    flex-flow: row;
    align-items: center;
    @include block-shadow;
    margin-bottom: 10px;

    .title-and-sub-title {
      width: 20%;
      height: 75px;
      display: flex;
      flex-flow: column;
      font-size: 14px;
      padding-left: 20px;
      justify-content: center;
      align-items: flex-start;

      @media screen and (max-width: 960px) {
        width: 40%;
      }
      .title {
        margin-bottom: 5px;
      }
    }

    .content1-and-content2 {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      align-items: center;

      @media screen and (max-width: 960px) {
        width: 60%;
      }

      .content1 {
        font-size: 12px;
        margin-right: 10px;
      }
      .content2 {
        font-size: 12px;
      }
    }
  }
}

</style>
