<template>
  <div class="text-block-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="text-block" 
      v-for="block in blocks" 
      :key="block.id"
      :style="{'width': blockWidth, 'height': blockHeight}"
    >
      <div class="titles">
        <h5 class="title">{{block.title}}</h5>
        <h6 class="sub-title">{{block.subTitle}}</h6>
      </div>
      
      <div class="texts">
        <span class="text1">{{block.text1}}</span>
        <span class="text2">{{block.text2}}</span>
        <span class="text3">{{block.text3}}</span>
      </div>
      <div class="icons" v-if="isTeam">
        <i 
          v-for="icon in icons" 
          :key="icon" 
          :class="'fas fa-'+icon"
          @click="clickEvent"
        ></i>
        
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
    },
    isTeam: {
      type: Boolean,
      default: true
    },
    icons: {
      type: Array,
      default: function () {
        return [
          'edit'
        ]
      }
    },
    clickEvent: {
      type: Function,
      default: function () {
        console.log('nothing happened');
      }
    }
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
    cursor: pointer;
    @include block-shadow;
    margin-bottom: 10px;

    .titles {
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

    .texts {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      align-items: center;

      .icons {
        margin-right: 10px;

        i {
          
          cursor: pointer;
        }
      }

      @media screen and (max-width: 960px) {
        width: 60%;
      }

      .text1, .text2, .text3 {
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
}

</style>
