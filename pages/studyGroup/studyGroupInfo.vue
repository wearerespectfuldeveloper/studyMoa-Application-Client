
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
import PageHeader from '@/components/pageContent/contentHeader/pageHeader';
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
      template: 
      [
        {
          name: 'SubSidebar',
          props: {
            width: '',
            height: '',
          },
          slots: [
            {slotName: 'list', component: 'sidebarList', props: {
              title: '',
              link: ''
            }}
          ]
        },
        {
          name: 'PageHeader',
          props: {
            title: '',
            subtitle: ''
          },
          slots: [
            {slotName: 'extra', component: 'DropDown', props: {
              
            }}
          ]
        },
        {
          name: 'VerticalBlock',
          props: {
            width: '',
            height: '',
          },
          slots: [
            {slotName: 'content', component: 'DropDown', props: {
              
            }},
            {slotName: 'content', component: '', props: {
              
            }},
            {slotName: 'content', component: 'Block', props: {
              
            }}
          ]
        }
      ]
    }
  },
  render(createElement) {
    return createElement('div',  
    {
      class: "study-group-page"
    },
    [
      createElement(this.template),
      createElement()
    ]
    );
  },
  components: {
    // 유기체 컴포넌트
    SubSidebar: () => import('@/components/pageContent/subSidebar/subSidebar'),
    VerticalBlock () {
      return import('@/components/pageContent/verticalBlock/verticalBlock')
    },
    // 분자 컴포넌트
    ContentHeader: () => import('@/components/pageContent/contentHeader/contentHeader'),
    StudyIntro: () => import('@/components/pageContent/studyIntro'),
    StudyMember: () => import('@/components/pageContent/studyMember'),
    StudyProgress: () => import('@/components/pageContent/studyProgress'),
    Dropdown: () => import('@/components/pageContent/dropdown/dropdown'),

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


</style>
