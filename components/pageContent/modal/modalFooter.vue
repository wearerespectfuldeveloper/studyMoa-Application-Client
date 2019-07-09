<template>
  <div class="modal-footer-container">
    <a href="#" class="modal-footer-left-button">이전</a>
    <a href="#" class="modal-footer-right-button">다음</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.modal-footer-container {
  display: flex;
  justify-content: space-between;
  .modal-footer-left-button {
    @include text-anchor-button($modalFooterRightButtonColor);
    @include button-color-transition(none, $modalFooterHoverButtonColor);
    padding: 10px;
  }

  .modal-footer-right-button {
    @include text-anchor-button($modalFooterLeftButtonColor);
    @include button-color-transition(none, $modalFooterHoverButtonColor);
    padding: 10px;
  }
  
}


</style>