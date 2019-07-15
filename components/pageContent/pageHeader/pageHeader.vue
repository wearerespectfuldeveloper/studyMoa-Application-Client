
<template>
  <div>
    <slot name="title"></slot>
    <slot name="subTitle"></slot>
    <slot name="button"></slot>
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
import { organism } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [organism],
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
