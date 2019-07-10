<template>
  <div>
    <slot name="header"></slot>
    <slot name="content"></slot>
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