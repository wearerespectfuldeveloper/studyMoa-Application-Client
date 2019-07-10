<template>
  <div>
    <i class="fas fa-language"></i>   
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule]
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $blockMatchColor;
  i {
    color: white;
    font-size: 50px;
  }
}


</style>
