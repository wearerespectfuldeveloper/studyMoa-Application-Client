<template>
  <!--서브 사이드바-->
  <div>
    <slot name="list"></slot>
  </div>
</template>

<script>
import { organism } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [organism]
}
</script>

<style lang="scss" scoped>



</style>