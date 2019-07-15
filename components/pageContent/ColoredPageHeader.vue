<template>
  <div 
    class="colored-page-header-container" 
    :style="{'width': width, 'height': height}">
    <h4 class="title">{{title}}</h4>
    <a href="#" title="Close" class="close">Close</a>
  </div>
</template>

<script>
import {molecule} from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
// 모달 헤더
.colored-page-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: $ColoredPageHeaderColor;

  .title {
    color: white;
    margin-left: 20px;
  }

  .close {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      color: #eee;
    }
  }
}
</style>