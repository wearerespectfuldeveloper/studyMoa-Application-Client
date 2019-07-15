<template>
  <ul>
    <li v-for="list in sidebarLists" :key="list.title">
      <a href="#" @click="clickEvent(list.component)">{{list.title}}</a>
    </li>
  </ul>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    sidebarLists: {
      type: Array,
      default: []
    },
    clickEvent: {
      type: Function,
      default: () => console.log('nothing happened')
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
ul {
  margin-top: 20px;
  height: 70%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 14px;
  @include anchor-list-dark;
  li {
    padding: 10px;
    width: 100%;
    @include background-color-transition($subsidebarHoverColor)
  }
}
</style>

