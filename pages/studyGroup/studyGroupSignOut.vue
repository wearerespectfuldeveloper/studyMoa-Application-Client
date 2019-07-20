
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
        
            {slotName: 'middle', component: 'MessageAndButton', props: {
              width: '90%',
              height: '90%'
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
