
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
            clickEvent: this.switchSlots
          },
          class: {
            'sub-sidebar': true
          },
          slots: [
            {slotName: 'list', component: 'SidebarList',  props: {
              sidebarLists: [
                {title: "그룹 정보", component: 'studyGroupInfo'},
                {title: "스터디그룹 게시판", component: 'studyGroupBoard'},
                {title: "그룹 정보 관리", component: 'studyGroupInfoManagement'},
                {title: "멤버 관리", component: 'studyMemberManagement'},
                {title: "참가 요청 내역", component: 'participationRequestList'},
                {title: "그룹 초대 내역", component: 'invitationList'},
                {title: "그룹 탈퇴", component: 'studyGroupSignOut'},
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
          slots: [
            {slotName: 'middle', component: 'ContentHeader', props: {
              width: '90%',
              title: '참가 요청 내역',
              buttonText: '참여하기'
            }},
            {slotName: 'middle', component: 'ThumnailBlocks', props: {
              width: '90%',
              blocks: [
                {title: '블록1', text: 'Hellow World!', id: 0 },
                {title: '블록2', text: 'Hellow World!', id: 1 },
                {title: '블록3', text: 'Hellow World!', id: 2 },
                {title: '블록4', text: 'Hellow World!', id: 3 },
                {title: '블록5', text: 'Hellow World!', id: 4 },
                {title: '블록6', text: 'Hellow World!', id: 5 }
              ],
            }},
          ],
        },
        {
          name: 'Modal',
          class: {
          },
          props: {
            width: '80%',
            height: '80%',
            showButton: false
          },
          slots: [
            {slotName: 'header', component: 'ColoredPageHeader', props: {
              width: '100%'
            }},
            {slotName: 'body', component: 'PageForm', props: {
              width: '80%',
              height: '80%'
            }},
            {slotName: 'footer', component: 'PageFooter', props: {
              width: '80%'
            }},
          ]

        }
      ]
    }
  },
  render(createElement) {
    // 여기서 케이스 나누자
    return this.$templateLoad(createElement, this.template);
  },
}
</script>

<style lang="scss" scoped>

</style>
