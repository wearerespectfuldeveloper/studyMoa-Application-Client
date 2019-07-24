<template>
  <div class="page-content-container">
    <div class="top-content-container">
      <slot name="top"></slot>
    </div>
    <div class="middle-content-container">
      <div class="middle-left-content-container">  
        <slot name="left"></slot>
      </div>
      <div class="middle-center-content-container">
        <slot name="center"></slot>
      </div>
      <div class="middle-right-content-container">
      <slot name="right"></slot>
      </div>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    buttonText: {
      type: String,
      default: '수정하기'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content-container {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;  
  align-items: center;
}

.top-content-container{
  display: flex;
  flex-flow: row;
  width: 95%;
  
  align-items: center;

}

.middle-content-container{
  display: flex;
  flex-flow: row;
  width: 95%;
}

.middle-left-content-container{
  height: 100px;
  width: 15%;
  align-items: left;
}

.middle-center-content-container{
  width: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.middle-right-content-container{
  width: 15%;
}


</style>
