// 페이지 이름 별로 기본 템플렛이 데이터들에 들어간다.
// 페이지 템플릿 : slots 배열은 null 값이어야 한다.

export const state = () => ({
  test: 'test',
  mainPage: [
    {
      name: 'PageHeader',
      props: {

      },
      class: 'page-header',
      slots: [
        {slotName: 'dropdown', component: 'Dropdown', props: {
          width: '90%',
          categories: [
            { name: '카테고리1', value: 1},
            { name: '카테고리2', value: 2}
          ]
        }}
      ]
    },
    {
      name: 'PageContent',
      props: {
        
      },
      class: 'page-content',
      slots: null
    },
    {
      name: 'Modal',
      props: {
        height: '80%',
        showButton: false
      },
      class: {
        
      },
      slots: null
    },
  ],
  studyGroupPage: [
    {
      name: 'SubSidebar',
      props: {
        width: '',
        height: '',
        clickEvent: ''
      },
      class: 'sub-sidebar',
      slots: [
        {slotName: 'list', component: 'SidebarList',  props: {
          sidebarLists: [
            {title: "그룹 정보", component: 'GroupInfo'},
            {title: "스터디그룹 게시판", component: 'StudyGroupBoard'},
            {title: "그룹 정보 관리", component: 'GroupInfoManagement'},
            {title: "멤버 관리", component: 'MemberManagement'},
            {title: "참가 요청 내역", component: 'ParticipationRequestList'},
            {title: "그룹 초대 내역", component: 'ParticipationInvitationList'},
            {title: "그룹 탈퇴", component: 'GroupSignOut'},
          ],
          clickEvent: (template) => { this.mainPage.find(x => x.name == 'PageContent').slots = this[template] }
        }}
      ]
    },
    {
      name: 'PageContent',
      class: "main-content",
      props: {
        width: '',
        height: '',
      },
      slots: null
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
      slots: null
    }
  ]
});

export const getters = {

}

export const mutations = {
  add_molecule () {

  },
  delete_molecule () {
  
  },
  update_molecule () {

  }

}

export const actions = {
  init_template () {

  },
  add_molecule () {

  },
  delete_molecule () {
  
  },
  update_molecule () {

  }
}