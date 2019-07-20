
<script>
import template from '@/assets/js/template'

export default {
  data () {
    return {
      pageContentSlotList: [
        {slotName: 'middle', component: 'ContentHeader', props: {
          width: '90%',
          title: '스터디그룹 소개',
        }},
        {slotName: 'middle', component: 'Document', props: {
          width: '90%',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
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
          buttonClickEvent: this.test_method
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
    }
  },
  computed: {
    template () {
      return [
        {
          name: 'PageContent',
          class: {
          },
          props: {
            width: '',
            height: '',
          },
          slots: this.pageContentSlotList
        },
        {
          name: 'Modal',
          class: {
          },
          props: {
            width: '60%',
            height: '80%',
            showButton: false
          },
          slots: this.modalSlotList
        }
      ]
    }
  },
  mounted() {

    template.A.methodPointer = this

    console.log(template.A.test_method())

    // this.test_method = template.A.test_method;

    // this.test_method()
  },
  render(createElement) {

    
    // return createElement('h1', 'testing!')

    // console.log(template.studyGroupInfo);

    // template.pointer = this;

    // this.switch_components(template.studyGroupInfo, 'Modal', template.studyProgressSlots)

    // this.insert_method(template.studyGroupInfo, 'PageContent', 'ContentHeader', this.test_method)

    // // 여기도 반응형은 아닐 것 같은데
    return this.$subTemplateLoad(createElement, this.template);
  
  },
  methods: {

    // 슬롯 리스트 데이터를 받고, 어느 프레임의 슬롯 리스트를 교체할 것인지. 근데 하나의 유기체에서는 하나의 프레임만 써야한다는 제한 같은 걸 걸지 않으면 음... 자동으로 생성되는 아이디 같은게 있어서 식별자 역할을 해줘야 하겠네.

    switch_components (target, templateName, list) {
      const targetIndex = target.findIndex(x => x.name === templateName);
      target[targetIndex].slots = list
    },

    test_method () {
      location.href="#open-modal"
      this.modalSlotList.pop();
    },

    insert_method (target, templateName, componentName, method) {
      const targetIndex = target.findIndex(x => x.name === templateName);
      const targetComponentIndex = target[targetIndex].slots.findIndex(y => y.props.title === '스터디 진행 기록');

      console.log(method)

      target[targetIndex].slots[targetComponentIndex].props.buttonClickEvent = method;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
