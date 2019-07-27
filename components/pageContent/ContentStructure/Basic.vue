<template>
  <div class="basic-container">
    <div
      :style="{'background-color': backgroundColor}" 
      class="main"
      :class="{'shadow': showShadow}"
    >
      <slot name="main"></slot>
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
  padding: 10px;
  height: 100%;
}

.main {
  padding: 1.2em;
  grid-area: main;
}

.shadow {
  @include block-shadow;
}

</style>