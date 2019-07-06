<template>
  <div class="block-container">

    <slot name="thumnail"></slot>

    <div class="column">

      <slot name="text"></slot>

      <slot name="buttons"></slot>

    </div>
    
  </div>
</template>

<script>


export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

.block-container {
  cursor: pointer;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
  background-color: white;
  margin-bottom: 20px;
  width: 80%;
  height: 100%;
  transition: 0.3s;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 10px solid $blockCategoryColor;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  }
}

.column {
  display: flex;
  flex-flow: column;
}


</style>
