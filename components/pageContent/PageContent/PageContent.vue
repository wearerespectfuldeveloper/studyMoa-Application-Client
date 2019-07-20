<template>
  <div class="page-content-container">
    <slot name="top"></slot>
    <slot name="middle"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  
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
</style>
