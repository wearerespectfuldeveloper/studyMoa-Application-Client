<template>
  <li class="dropdown-list" >
    {{text}}
  </li>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-list {
  padding: 10px;
  @include thin-border-bottom;
}
</style>
