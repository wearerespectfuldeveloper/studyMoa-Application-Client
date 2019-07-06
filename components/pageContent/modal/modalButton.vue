<template>
  <!-- 버튼 부분 -->
  <div class="block-buttons">
    <a href="#open-modal" class="modal-button">상세보기</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.block-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  .modal-button {
    @include text-anchor-button($modalOpenButtonColor);
  }
}


</style>