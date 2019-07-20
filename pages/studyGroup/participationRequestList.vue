
<script>
export default {
  data () {
    return {
      template: 
      [
        {
          name: 'PageContent',
          class: {
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
    return this.$subTemplateLoad(createElement, this.template);
  },
}
</script>

<style lang="scss" scoped>

</style>
