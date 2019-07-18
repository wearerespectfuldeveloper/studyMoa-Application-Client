// 페이지 이름 별로 기본 템플렛이 데이터들에 들어간다.
export const state = () => ({
  mainPage: [
    {
      name: 'PageHeader',
      props: {

      },
      class: {
        'page-header': true
      },
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
      class: {
        'page-content': true
      },
      slots: [
        {slotName: 'top', component: 'ThumnailBlocks', props: {
          width: '90%',
          blockHeight: '150px',
          isHorizontal: true,
          thumnailSectorSize: '20%',
          thumnailSectorMinSize: '200px',
          thumnailIcon: 'language',
          textSectorSize: '80%',
          clickEvent:  () => {
            location.href = "#open-modal";
          },
          blocks: [
            {title: '블록1', text: 'Hellow World!', id: 0 },
            {title: '블록2', text: 'Hellow World!', id: 1 },
            {title: '블록3', text: 'Hellow World!', id: 2 },
            {title: '블록4', text: 'Hellow World!', id: 3 },
            {title: '블록5', text: 'Hellow World!', id: 4 },
            {title: '블록6', text: 'Hellow World!', id: 5 }
          ],
        }}
      ]
    },
    {
      name: 'Modal',
      props: {
        height: '80%',
        showButton: false
      },
      class: {
        
      },
      slots: [
        {slotName: 'header', component: 'ColoredPageHeader', props: {
          title: 'StudyMoa',
          width: '100%',
          height: '50px',
        }},
        {slotName: 'body', component: 'ContentHeader', props: {
          width: '80%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }},
        {slotName: 'body', component: 'Document', props: {
          width: '80%',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        }},
        {slotName: 'body', component: 'ContentHeader', props: {
          width: '80%',
          title: '스터디 멤버',
          subTitle: '스터디 장 : someone',
          buttonText: '수정하기'
        }},
        {slotName: 'body', component: 'thumnailBlocks', props: {
          width: '80%',
          blockWidth: '100px',
          isHorizontal: false,
          thumnailImgSrc: 'https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg',
          blocks: [
            {title: 'person1', text: '프론트엔드', id: 0 },
            {title: 'person2', text: '백엔드', id: 1 },
            {title: 'person1', text: '프론트엔드', id: 2 },
            {title: 'person2', text: '백엔드', id: 3 },
            {title: 'person1', text: '프론트엔드', id: 4 },
            {title: 'person2', text: '백엔드', id: 5 }
          ]
        }},
        {slotName: 'body', component: 'ContentHeader', props: {
          width: '80%',
          title: '스터디 진행 기록',
          buttonText: '작성하기'
        }},
        {slotName: 'body', component: 'TextBlocks', props: {
          width: '80%',
          blockWidth: '100%',
          blocks: [
            {id: 0, title: '1주차', subTitle: '자기 소개 및 역할 분담', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 1, title: '2주차', subTitle: '사전 자료 조사', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 2, title: '3주차', subTitle: '기획 설계', text1: '라이츄', text2: '2019.05.15', text3: '10:56AM'} 
          ]
        }},
        {slotName: 'footer', component: 'PageFooter', props: {
          width: '80%',
          height: '50px',
        }}
      ]
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
      class: {
        'sub-sidebar': true
      },
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
      class: {
        "main-content": true
      },
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
  ],
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