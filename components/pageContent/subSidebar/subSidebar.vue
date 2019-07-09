<template>
  <!--서브 사이드바-->
  <div class="sub-sidebar">
    <ul>
      <li v-for="list in sidebarLists" :key="list.title">
        <a href="#">{{list.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sidebarLists: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-sidebar {
  grid-column: 1 / 4;
  grid-row: 1 / 17;
  height: 100%;
  display: flex;
  flex-flow: column;
  @include thin-border-right;
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
}
</style>