
<script>
export default {
  data () {
    return {
      template: 
      [
        {
          name: 'PageUpContent',
          class: {
          },
          props: {
            width: '',
            height: '',
          },
          slots: [
            {slotName: 'top', component: 'ContentHeader', props: {
              width: '100%',
              title: '내 정보 수정'
            }},
            {slotName: 'left', component: 'SidebarList',  props: {
                sidebarLists: [
                  {title: "그룹 정보", component: 'myInfoEdit'},
                  {title: "비밀번호변경", component: 'changePwd'},
                  {title: "회원탈퇴", component: 'signOut'}
                ]
              }},
             {slotName: 'center', component: 'GridBlock', props: {
              width: '100%',
              blockWidth: '100%',
              blocks: [
                {label: '아이디', value: 'TestId'},
                {label: '이메일', value: 'testEmail@naver.com'},
                {label: '성  명', value: '가나다', type:'input'},
                {label: '휴대폰번호', value: 'TestId', type : 'input'},
              ]
            }},
              {slotName: 'center', component: 'TextAreaBlock', props: {
              width: '100%',
              blocks: []
            }},
            {slotName: 'center', component: 'ContentHeader', props: {
              width: '100%',
              title: '관심사'
            }},
            {slotName: 'center', component: 'thumnailBlocks', props: {
              width: '90%',
              blockWidth: '100px',
              isHorizontal: false,
              blocks: [
                {title: 'IT', id: 0 },
                {title: '영어', id: 1 },
                {title: '수영', id: 2 },
              ]
            }},
            {slotName: 'right',  component:'buttons',  props: {
              width: '90%'
            }}
          ]
        },
        
      ]
    }
  },
  render(createElement) {
    return this.$subTemplateLoad(createElement, this.template);
  },
}
</script>

<style lang="scss" scoped>

</style>
