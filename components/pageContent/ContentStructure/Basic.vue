<template>
  <div class="basic-container">
    <div
      :style="{'background-color': backgroundColor}" 
      class="main"
      :class="{'shadow': showShadow}"
    >
      <slot name="top"></slot>
      <slot name="middle"></slot>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    showShadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-container {
  display: grid;
  grid-template-areas: 
    "main";
  grid-template-rows: 1fr;  
  grid-template-columns: 1fr;
  height: 100%;
}

.main {
  display: grid;
  padding: 1.2em;
  grid-area: main;
}

.shadow {
  @include block-shadow;
}

</style>