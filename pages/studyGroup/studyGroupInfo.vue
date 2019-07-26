
<script>
import template from '@/assets/js/template'
import { mapState } from 'vuex'

class TestTemplate {
  constructor (data) {
    this.template = data;
  }
}

let Temp = new TestTemplate({
      // 구조
      PageContent: {
        name: 'PageContent',
        props: {
          width: '',
          height: '',
        },
        slots: []
      },

      Modal: {
        name: 'Modal',
        props: {
          width: '60%',
          height: '80%',
          showButton: false
        },
        slots: []
      },

      // 슬롯 리스트
      pageContentSlotList: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
          buttonText: '테스트'
        }},
        {slotName: 'middle', component: 'Document', props: {
          width: '90%',
          paragraph: ""
        }},
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디 멤버',
          subTitle: '스터디 장 : someone',
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
          buttonText: '작성하기',
        }},
        {slotName: 'middle', component: 'TextBlocks', props: {
          width: '90%',
          clickEvent: function () {
            location.href="#open-modal";
          },
          blockWidth: '100%',
          blocks: [
            {id: 0, title: '1주차', subTitle: '자기 소개 및 역할 분담', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 1, title: '2주차', subTitle: '사전 자료 조사', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
            {id: 2, title: '3주차', subTitle: '기획 설계', text1: '라이츄', text2: '2019.05.15', text3: '10:56AM'} 
          ]
        }}
      ],

      modalSlotList: [
        {slotName: 'header', component: 'ColoredPageHeader', props: {
          width: '100%',
          height: '50px'
        }},
        {slotName: 'body', component: 'PageForm', props: {
          width: '80%',
          height: '80%',

        }},
        {slotName: 'footer', component: 'PageFooter', props: {
          width: '80%'
        }},
      ]
    })

export default {
  data () {
    return Temp.template;
  },
  computed: {
    ...mapState('studyGroup/studyGroupInfo', {
      studyGroupDesc: state => state.studyGroupDesc,
    }),
    
  },
  mounted() {

    // template.A.methodPointer = this

    // console.log(template.A.test_method())

    // this.test_method = template.A.test_method;

    // this.test_method()
  },
  methods: {

    // 슬롯 리스트 데이터를 받고, 어느 프레임의 슬롯 리스트를 교체할 것인지. 근데 하나의 유기체에서는 하나의 프레임만 써야한다는 제한 같은 걸 걸지 않으면 음... 자동으로 생성되는 아이디 같은게 있어서 식별자 역할을 해줘야 하겠네.

    test_method () {
      alert('work!')
      this.modalSlotList.pop();
    }
  },
  render(createElement) {

    // 여기서 조립

    this.PageContent.slots = this.pageContentSlotList;
    
    this.PageContent.slots[this.PageContent.slots.findIndex(x => x.component === 'Document')].props.paragraph = this.studyGroupDesc;

    this.PageContent.slots[this.PageContent.slots.findIndex(x => x.component === 'ContentHeader')].props.buttonClickEvent = this.test_method;

    this.Modal.slots = this.modalSlotList;

    return this.$subTemplateLoad(createElement, [this.PageContent, this.Modal]);
  
  },
}
</script>

<style lang="scss" scoped>

</style>
