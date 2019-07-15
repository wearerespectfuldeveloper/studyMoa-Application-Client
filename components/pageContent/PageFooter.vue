<template>
  <div 
    class="page-footer-container"
    :style="{'width': width, 'height': height}"
  >
    <a href="#" class="page-footer-left-button">이전</a>
    <a href="#" class="page-footer-right-button">다음</a>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'
export default {
  mixins: [molecule]
}
</script>

<style lang="scss" scoped>
.page-footer-container {
  display: flex;
  justify-content: space-between;
  .page-footer-left-button {
    @include text-anchor-button($modalFooterRightButtonColor);
    @include button-color-transition(none, $modalFooterHoverButtonColor);
    padding: 10px;
  }

  .page-footer-right-button {
    @include text-anchor-button($modalFooterLeftButtonColor);
    @include button-color-transition(none, $modalFooterHoverButtonColor);
    padding: 10px;
  }
  
}


</style>