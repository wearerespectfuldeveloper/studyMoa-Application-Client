<!--

API
 - width: 문자열로 픽셀값이나 퍼센트 값을 넘겨받으면 해당 너비만큼 블록의 너비가 결정됩니다.
 - clickEvent: clickEvent Prop을 통해 함수를 넘겨받으면, 이 블록이 클릭될 때마다 그 함수를 실행합니다.

-->

<template>
  <div 
    :style="{'width': width, 'height': height}"
    class = "thumnail-blocks-container"
  >
    <div v-for = "block in blocks" :key = "block.id" class="thumnail-block"
      @click="clickEvent"
      :style="{'height': blockHeight, 'width': blockWidth}"
      :class="{'horizontal': isHorizontal, 'vertical': !isHorizontal}"
    >
      <div class="thumnail" :style="{'width': thumnailSectorSize, 'flex-basis': thumnailSectorMinSize}">
        <i :class="'fas fa-' + thumnailIcon"></i>
        <img :src="thumnailImgSrc"/>
      </div>

      <div class="text" :style="{'width': textSectorSize, 'flex-basis': textSectorMinSize}">
        <h4>
          <b>{{block.title}}</b>
        </h4>
        <p>
          {{block.text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins' ;

export default {
  mixins: [molecule],
  props: {
    isHorizontal: {
      type: Boolean,
      default: false
    },
    clickEvent: {
      type: Function,
      default: function () { console.log('nothing happened'); }
    },
    thumnailSectorSize: {
      type: String,
      default: ''
    },
    thumnailSectorMinSize: {
      type: String,
      default: ''
    },
    thumnailImgSrc: {
      type: String,
      default: ''
    },
    thumnailIcon: {
      type: String,
      default: ''
    },
    blockHeight: {
      type: String,
      default: ''
    },
    blockWidth: {
      type: String,
      default: ''
    },
    textSectorSize: {
      type: String,
      default: ''
    },
    textSectorMinSize: {
      type: String,
      default: ''
    },
    blocks: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

.thumnail-blocks-container {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;

  .horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-flow: row;

    .thumnail {

      // ratio 곱하기 %
      // @media screen and (max-width: 960px) {
      //   min-width: 30%;
      // }

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blockMatchColor;
      i {
        color: white;
        font-size: 50px;
      }
      img {
        width: 50px;
      }
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;      
      padding: 10px 20px 10px 20px;
      h4 {
        margin-bottom: 10px;
      }
      p {      
        font-size: 12px;
      }
    }
  }

  .vertical {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    margin: 10px;

    .thumnail {

      // ratio 곱하기 %
      // @media screen and (max-width: 960px) {
      //   min-width: 30%;
      // }

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blockMatchColor;
      i {
        color: white;
        font-size: 50px;
      }
      img {
        width: 50px;
      }
    }

    .text {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
      
      padding: 10px 20px 10px 20px;
      h4 {
        margin-bottom: 10px;
      }
      p {      
        font-size: 12px;
      }
    }
  }  

  .thumnail-block {
    display: flex;
    cursor: pointer;
    @include block-shadow;
    background-color: white;
    width: 100%;
    margin-bottom: 20px;
    transition: 0.3s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 10px solid $blockCategoryColor;
    &:hover {
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
    }
  }
}






</style>
