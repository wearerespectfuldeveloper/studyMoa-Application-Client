<script>

export default {
  data () {
    return {
      GroupInfo: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }},
        {slotName: 'middle', component: 'Document', props: {
          width: '90%',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        }},
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디 멤버',
          subTitle: '스터디 장 : someone',
          buttonText: '수정하기'
        }},
        {slotName: 'middle', component: 'thumnailBlocks', props: {
          width: '90%',
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
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디 진행 기록',
          buttonText: '작성하기'
        }},
        {slotName: 'middle', component: 'TextBlocks', props: {
          width: '90%',
          blockWidth: '100%',
          blocks: [
            {id: 0, title: '1주차', subTitle: '자기 소개 및 역할 분담', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 1, title: '2주차', subTitle: '사전 자료 조사', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 2, title: '3주차', subTitle: '기획 설계', text1: '라이츄', text2: '2019.05.15', text3: '10:56AM'} 
          ]
        }}
      ],
      StudyGroupBoard: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디 게시판',
          buttonText: '작성하기'
        }},
        {slotName: 'middle', component: 'Dropdown', props: {
          width: '90%',
          categories: [
            {
              name: '카테고리1',
              value: 1
            },
            {
              name: '카테고리2',
              value: 2
            }
          ]
        }},
        {slotName: 'middle', component: 'TextBlocks', props: {
          width: '90%',
          blockWidth: '100%',
          blocks: [
            {id: 0, title: '1주차', subTitle: '자기 소개 및 역할 분담', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 1, title: '2주차', subTitle: '사전 자료 조사', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 2, title: '3주차', subTitle: '기획 설계', text1: '라이츄', text2: '2019.05.15', text3: '10:56AM'} 
          ]
        }}
      ],
      GroupInfoManagement: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }},
        
      ],
      MemberManagement: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }},
      ],
      ParticipationRequestList: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }},
      ],
      GroupSignOut: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '참여하기'
        }}
      ],
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
                {title: "그룹 정보", component: 'GroupInfo'},
                {title: "스터디 게시판", component: 'StudyGroupBoard'},
                {title: "그룹 정보 관리", component: 'GroupInfoManagement'},
                {title: "멤버 관리", component: 'MemberManagement'},
                {title: "참가 요청 내역", component: 'ParticipationRequestList'},
                {title: "그룹 초대 내역", component: 'ParticipationInvitationList'},
                {title: "그룹 탈퇴", component: 'GroupSignOut'},
              ],
              clickEvent: (template) => { this.template.find(x => x.name == 'PageContent').slots = this[template] }
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
        }
      ]
    }
  },
  render(createElement) {
    return this.$templateLoad(createElement, this.template);
  },
  created() {
    this.template[1].slots = this.GroupInfo;
  },
  methods: {
    switchSlots (slots) {
      console.log(this);
      // this.template[1].slots = slots;
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
