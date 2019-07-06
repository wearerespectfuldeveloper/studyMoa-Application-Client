<template>
  <div class="sidebar">
    <ul v-for="content in sidebarContent" :key="content.title">
      <span class="disappear">{{content.title}}</span>
      <li v-for="sub in content.subs" :key="sub">
        <a href="#"><i :class="'fas fa-' + sub.icon"></i><span class="disappear">{{sub.title}}</span></a>
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
          icon: "user-edit",
          id: 0,
          subs: [
            {id: 0, title: '카테고리 1', icon: "user-edit"},
            {id: 1, title: '카테고리 2', icon: "user-edit"},
            {id: 2, title: '카테고리 3', icon: "user-edit"}
          ]
        },
        {
          title: '자유게시판',
          icon: "user-edit",
          id: 1,
          subs: [
            {title: '스터디 구해요', icon: "user-edit"},
            {title: '잡담', icon: "user-edit"}
          ]
        }
      ]
    }
  },
  computed: {
    display () {
      if (this.$store.getters.sidebarMinimize == true)
        return 'none';
      else {
        return 'inline-block'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@include anchor-list-dark;

ul {
  padding: 10px;
  display: flex;
  flex-flow: column;
  color: rgb(82, 82, 82);
  font-weight: 600;
  margin-top: 20px;

  .disappear {
    padding: 10px;
    margin-bottom: 10px;
  }

  li {
    padding: 10px;
    a {
      color: rgb(82, 82, 82);
      i {
        color: $navbarColor;
        
      }
    }
    
  }
}

@media screen and (max-width: 960px) {
  .disappear {
    display: none;
  }

  ul {
    li {
      i {
        padding: 0;
        margin: 0 !important;
      }
    }
  }
  
}




</style>
