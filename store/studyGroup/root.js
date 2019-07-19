
export const state = () => ({
  template: [
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
      slots: [
        {slotName: 'top', component: 'ThumnailBlocks', props: {
          width: '90%',
          blockHeight: '150px',
          isHorizontal: true,
          thumnailSectorSize: '20%',
          thumnailSectorMinSize: '200px',
          thumnailIcon: 'language',
          textSectorSize: '80%',
          blocks: [
            {title: '블록1', text: 'Hellow World!', id: 0 },
            {title: '블록2', text: 'Hellow World!', id: 1 },
            {title: '블록3', text: 'Hellow World!', id: 2 },
            {title: '블록4', text: 'Hellow World!', id: 3 },
            {title: '블록5', text: 'Hellow World!', id: 4 },
            {title: '블록6', text: 'Hellow World!', id: 5 }
          ],
        }}
      ],
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
      ],
    },
  ]
});

export const getters = {
  
}

export const mutations = {
  
}

export const actions = {
  
}
