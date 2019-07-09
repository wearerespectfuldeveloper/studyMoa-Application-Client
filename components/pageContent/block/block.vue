<!--

API
 - width: 문자열로 픽셀값이나 퍼센트 값을 넘겨받으면 해당 너비만큼 블록의 너비가 결정됩니다.
 - clickEvent: clickEvent Prop을 통해 함수를 넘겨받으면, 이 블록이 클릭될 때마다 그 함수를 실행합니다.

-->


<template>
  <div class="block-container"
    @click="clickEvent"
    :style="{'width': width, 'height': height}"
  >

    <slot name="left-sector"></slot>

    <slot name="center-sector"></slot>

    <slot name="right-sector"></slot>

    
  </div>
</template>

<script>


export default {
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    },
    clickEvent: {
      type: Function,
      defalt () {
        console.log('nothing happened')
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

.block-container {
  cursor: pointer;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
  background-color: white;
  margin-bottom: 20px;
  height: 100%;
  transition: 0.3s;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 10px solid $blockCategoryColor;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  }
}


</style>
