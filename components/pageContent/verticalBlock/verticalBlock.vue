<template>
  <div class="main-content">
    <h1>테스트</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.main-content {
  grid-column: 4 / 17;
  grid-row: 1 / 17;
  display: flex;
  flex-flow: column;
  align-items: center;
  @include container-scroll-y;
}
</style>