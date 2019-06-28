<template>
  <div class="sidebar full-height">
    <ul v-for="content in sidebarContent" :key="content.title">
      <h5 class="disappear"><i :class="'fas fa-' + content.icon"></i>{{content.title}}</h5>
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
            {title: '카테고리 1', icon: "user-edit"},
            {title: '카테고리 2', icon: "user-edit"},
            {title: '카테고리 3', icon: "user-edit"}
          ]
        },
        {
          title: '자유게시판',
          icon: "user-edit",
          id: 0,
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
  color : #303030;
  font-weight: 700;
  h5 {
    &:nth-child(1) {
      margin-top: 20px;
    }
    font-weight: 700;
    padding: 10px;
    border-bottom: 0.5px solid rgba(0,0,0,0.5);
    padding-bottom: 10px;
    i {
      padding-right: 10px;
    }
  }
  li {
    padding: 10px;
    i {
      padding-right: 10px;
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
        padding-right: 0;
      }
    }
  }
  
}


// .sidebar 
//   @include sidebar;
//   
// 



</style>
