<template>
  <div class="modal-header-container">
    <h4 class="modal-title">Studymoa</h4>
    <a href="#" title="Close" class="modal-close">Close</a>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
// 모달 헤더
.modal-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: $modalHeaderColor;

  .modal-title {
    color: white;
    margin-left: 20px;
  }

  .modal-close {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      color: #eee;
    }
  }
}
</style>