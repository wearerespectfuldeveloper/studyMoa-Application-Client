<template>
  <div class="modal-footer-container">
    <a href="#" class="modal-footer-button">이전</a>
    <a href="#" class="modal-footer-button">다음</a>
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
  .modal-footer-button {
    @include text-anchor-button(red);
    @include button-color-transition(none, $modalFooterHoverButtonColor);
    padding: 10px;
  }
}


</style>