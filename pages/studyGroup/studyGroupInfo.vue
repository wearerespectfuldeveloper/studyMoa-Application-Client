
<!-- 원하는 구조
  <div class="study-group-page">
    
    <component :is="'SubSidebar'" 
      :sidebarLists = "sidebarLists"
    >
    </component>
      
    <div class="main-content">
      <component :is="'ContentHeader'"
        :title = "'그룹 정보'"
        :width = "'90%'"
      >
        
      </component>
      <component :is="'StudyIntro'"></component>
      <component :is="'StudyMember'" :members = "members"></component>
      <component :is="'StudyProgress'"></component>
      
    </div>
  </div>
-->

<script>
// 유기체 컴포넌트
import VerticalBlock from '@/components/pageContent/verticalBlock/verticalBlock';
import SubSidebar from '@/components/pageContent/subSidebar/subSidebar';

// 초기 분자 컴포넌트(비동기로 해야함, 여기 지우고)
import PageHeader from '@/components/pageContent/pageHeader/pageHeader';
import StudyIntro from '@/components/pageContent/studyIntro';
import StudyMember from '@/components/pageContent/studyMember';
import StudyProgress from '@/components/pageContent/studyProgress';
import Dropdown from '@/components/pageContent/dropdown/dropdown';

export default {
  data () {
    return {
      sidebarLists: [
        {title: "그룹 정보", component: 'GroupInfo'},
        {title: "스터디 게시판", component: 'StudyGroupBoard'},
        {title: "그룹 정보 관리", component: 'GroupInfoManagement'},
        {title: "멤버 관리", component: 'MemberManagement'},
        {title: "참가 요청 내역", component: 'ParticipationRequestList'},
        {title: "그룹 초대 내역", component: 'ParticipationInvitationList'},
        {title: "그룹 탈퇴", component: 'GroupSignOut'},
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

    // 아...이게 데이터 초기화 이전에 먼저 실행되는구나. 어디다 놓을지를 생각해봐야겠는데

    const template = 
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
              sidebarLists: this.sidebarLists
            }}
          ]
        },
        {
          name: 'VerticalBlock',
          class: {
            "main-content": true
          },
          props: {
            width: '',
            height: '',
          },
          slots: [
            {slotName: 'header', component: 'ContentHeader', props: {
              width: '90%',
              title: '그룹정보'
            }},
            {slotName: 'content', component: 'StudyIntro', props: {
              headerTitle: '스터디그룹 소개',
              headerSubTitle: '',
              headerButtonTitle: '참여하기'
            }},
            {slotName: 'content', component: 'StudyMember', props: {
              headerTitle: '스터디멤버 소개',
              headerSubTitle: '총원 4 / 6',
              headerButtonTitle: '프로필 보기'
            }},
            {slotName: 'content', component: 'StudyProgress', props: {
              headerTitle: '스터디 진행상황',
              headerSubTitle: '',
              headerButtonTitle: '',
              progresses: this.progresses
            }}
            
          ]
        }
      ]

    let organisms = template.map((x) => {
      
      const slotList = x.slots.map(s => createElement('component', { 
        is: s.component,
        slot: s.slotName,
        props: s.props
      }));

      return createElement('component', 
        // 템플릿 배열 안의 객체들마다 createElement 실행
        {
          is: x.name,
          class: x.class,
          props: x.props,
        },
        slotList
      )}
    )

    return createElement('div',  
      {
        class: "study-group-page"
      },
      organisms
    );

  },
  mounted() {
  },
  components: {
    // 유기체 컴포넌트
    SubSidebar: () => import('@/components/pageContent/subSidebar/subSidebar'),
    VerticalBlock: () => import('@/components/pageContent/verticalBlock/verticalBlock'),
    PageHeader: () => import('@/components/pageContent/pageHeader/pageHeader'),
    Dropdown: () => import('@/components/pageContent/dropdown/dropdown'),
    
    // 분자 컴포넌트
    ContentHeader : () => import('@/components/pageContent/contentHeader'),
    StudyIntro: () => import('@/components/pageContent/studyIntro'),
    StudyMember: () => import('@/components/pageContent/studyMember'),
    StudyProgress: () => import('@/components/pageContent/studyProgress'),
    SidebarList: () => import('@/components/pageContent/sidebarList'),
  } 
}
</script>

<style lang="scss" scoped>
.study-group-page {
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
