<template>
  <div class="sidebar">
    <ul v-for="content in sidebarContent" :key="content.title">
      <h5>{{content.title}}</h5>
      <li v-for="sub in content.subs" :key="sub">
        <a href="#">{{sub}}</a>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      sidebarContent: [
        {
          title: '스터디그룹',
          id: 0,
          subs: [
            '카테고리 1',
            '카테고리 2',
            '카테고리 3'
          ]
        },
        {
          title: '자유게시판',
          id: 0,
          subs: [
            '스터디 구해요',
            '잡담'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  @include sidebar;
  border-right: 0.4px solid rgba(0,0,0,0.5);
}



</style>
