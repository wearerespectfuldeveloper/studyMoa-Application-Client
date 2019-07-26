// 아 여기를 클래스로 할까

// 템플릿 객체를 만드는 클래스
// 템플릿 객체를 만드는 클래스
class Create_template {
  constructor () {
    
    this.structure = {
      
    };
    
    this.test = "test";

    this.slotList = [];

    this.methodPointer = null;
    
  }

  test_method () {
    console.log(this.methodPointer);
  }

  test_method2 () {
    this.methodPointer.testData = "changed!";
  }

  // 템플릿 객체를 렌더링 하는 메서드
  Render_template () {

  }
}

const A = new Create_template()

export default {
  A
}



// export default {
//   pointer: null,
//   studyGroupInfo: [
//     {
//       name: 'PageContent',
//       class: {
//       },
//       props: {
//         width: '',
//         height: '',
//       },
//       slots: [
//         {slotName: 'middle', component: 'ContentHeader', props: {
//           width: '90%',
//           title: '스터디그룹 소개',
//         }},
//         {slotName: 'middle', component: 'Document', props: {
//           width: '90%',
//           paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
//         }},
//         {slotName: 'middle', component: 'ContentHeader', props: {
//           width: '90%',
//           title: '스터디 멤버',
//           subTitle: '스터디 장 : someone',
//         }},
//         {slotName: 'middle', component: 'thumnailBlocks', props: {
//           width: '90%',
//           blockWidth: '100px',
//           isHorizontal: false,
//           thumnailImgSrc: 'https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg',
//           blocks: [
//             {title: 'person1', text: '프론트엔드', id: 0 },
//             {title: 'person2', text: '백엔드', id: 1 },
//             {title: 'person1', text: '프론트엔드', id: 2 },
//             {title: 'person2', text: '백엔드', id: 3 },
//             {title: 'person1', text: '프론트엔드', id: 4 },
//             {title: 'person2', text: '백엔드', id: 5 }
//           ]
//         }},
//         {slotName: 'middle', component: 'ContentHeader', props: {
//           width: '90%',
//           title: '스터디 진행 기록',
//           buttonText: '작성하기',
//           buttonClickEvent: function () {
//             console.log(this);
//             // 스코프가 미묘한가 보구만
//             // this.switch_components('PageContent', this.studyProgressSlots);
//             location.href="#open-modal";
//           }.bind(pointer),
//         }},
//         {slotName: 'middle', component: 'TextBlocks', props: {
//           width: '90%',
//           clickEvent: function () {
//             location.href="#open-modal";
//           },
//           blockWidth: '100%',
//           blocks: [
//             {id: 0, title: '1주차', subTitle: '자기 소개 및 역할 분담', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
//             {id: 1, title: '2주차', subTitle: '사전 자료 조사', text1: '피카츄', text2: '2019.05.15', text3: '10:56AM'},
//             {id: 2, title: '3주차', subTitle: '기획 설계', text1: '라이츄', text2: '2019.05.15', text3: '10:56AM'} 
//           ]
//         }}
//       ],
//     },
//     {
//       name: 'Modal',
//       class: {
//       },
//       props: {
//         width: '60%',
//         height: '80%',
//         showButton: false
//       },
//       slots: []
//     }
//   ],

  // studyProgressSlots: [
  //   {slotName: 'header', component: 'ColoredPageHeader', props: {
  //     width: '100%',
  //     height: '50px'
  //   }},
  //   {slotName: 'body', component: 'PageForm', props: {
  //     width: '80%',
  //     height: '80%',

  //   }},
  //   {slotName: 'footer', component: 'PageFooter', props: {
  //     width: '80%'
  //   }},
  // ]
// }