<template>
  <div class="page-container">
    <SubSidebar
      class="sub-sidebar"
      
    > 
      <SidebarList :sidebarLists="list" slot="list"></SidebarList>
    </SubSidebar>

    <nuxt-child />
  
  </div>
</template>


<script>
export default {
  // 안되면 그냥 이것만이라도 정적으로 해야지
  data () {
    return {

      list: [
        {title: "그룹 정보", component: '/studyGroup/studyGroupInfo'},
        {title: "스터디그룹 게시판", component: '/studyGroup/studyGroupBoard'},
        {title: "그룹 정보 관리", component: '/studyGroup/studyGroupInfoManagement'},
        {title: "멤버 관리", component: '/studyGroup/studyMemberManagement'},
        {title: "참가 요청 내역", component: '/studyGroup/participationRequestList'},
        {title: "그룹 초대 내역", component: '/studyGroup/invitationList'},
        {title: "그룹 탈퇴", component: '/studyGroup/studyGroupSignOut'},
      ]
    }
  },

  created() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
}

.sub-sidebar {

  grid-column: 1 / 4;
  grid-row: 1 / 17;
  height: 100%;
  display: flex;
  flex-flow: column;
  @include thin-border-right;
  
}

.main-content {
  grid-column: 4 / 17;
  grid-row: 1 / 17;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-top: 25px;
  @include container-scroll-y;
}

</style>
