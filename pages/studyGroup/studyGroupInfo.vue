
<script>

export default {
  data () {
    return {
      template: 
      [
        {
          name: 'SubSidebar',
          props: {
            width: '',
            height: '',
          },
          class: {
            'sub-sidebar': true
          },
          slots: [
            {slotName: 'list', component: 'SidebarList', props: {
              sidebarLists: [
                {title: "그룹 정보", component: 'GroupInfo'},
                {title: "스터디 게시판", component: 'StudyGroupBoard'},
                {title: "그룹 정보 관리", component: 'GroupInfoManagement'},
                {title: "멤버 관리", component: 'MemberManagement'},
                {title: "참가 요청 내역", component: 'ParticipationRequestList'},
                {title: "그룹 초대 내역", component: 'ParticipationInvitationList'},
                {title: "그룹 탈퇴", component: 'GroupSignOut'},
              ],
            }}
          ]
        },
        {
          name: 'PageContent',
          class: {
            "main-content": true
          },
          props: {
            width: '',
            height: '',
          },
          on: {
            click: this.clickTest
          },
          slots: [
            {slotName: 'header', component: 'ContentHeader', props: {
              width: '90%',
              title: '그룹정보'
            }},
            {slotName: 'middle', component: 'ContentHeader', props: {
              width: '90%',
              title: '그룹정보'
            }},
            {slotName: 'middle', component: 'ContentHeader', props: {
              width: '90%',
              title: '그룹정보'
            }},
            {slotName: 'middle', component: 'ContentHeader', props: {
              width: '90%',
              title: '그룹정보'
            }}
          ]
        }
      ],
      
      members: [
        {name: 'person1', role: '프론트엔드', id: 0 },
        {name: 'person2', role: '백엔드', id: 1 }
      ],
      progresses: [
        {id: 0, week: '1주차', done: '자기 소개 및 역할 분담', host: '피카츄', date: '2019.05.15', time: '10:56AM'},
        {id: 1, week: '2주차', done: '사전 자료 조사', host: '피카츄', date: '2019.05.15', time: '10:56AM'},
        {id: 2, week: '3주차', done: '기획 설계', host: '라이츄', date: '2019.05.15', time: '10:56AM'} 
      ]
    }
  },
  render(createElement) {
    return this.$templateLoad(createElement, this.template);
  },
  mounted() {
  },
  methods: {
    clickTest () {
      this.template.splice(0, 1);
    }
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
  @include container-scroll-y;
}

</style>
