<template>
  <ul class="sidebar-list-container">
    <li class="list" v-for="list in sidebarLists" :key="list.title">
      <nuxt-link :to="list.component">{{list.title}}</nuxt-link>
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
      default: function () {
        return [
          {id: 1, title: "링크1", compoent: "컴포넌트"},
          {id: 2, title: "링크2", compoent: "컴포넌트"},
          {id: 3, title: "링크3", compoent: "컴포넌트"},
          {id: 4, title: "링크4", compoent: "컴포넌트"},
          {id: 5, title: "링크5", compoent: "컴포넌트"}
        ]
      }
    },
    clickEvent: {
      type: Function,
      default: () => console.log('nothing happened')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-list-container {
  margin-top: 20px;
  height: 70%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 14px;
  @include anchor-list-dark;
  .list {
    padding: 10px;
    width: 100%;
    @include background-color-transition($subsidebarHoverColor)
  }
}
</style>

