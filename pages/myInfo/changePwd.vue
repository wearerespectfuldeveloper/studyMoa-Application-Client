
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
            {slotName: 'center', component: 'MessageAndButton2',  props: {
              message:"",
              buttonLabel1: "비밀번호 확인", 
              buttonText1: "입력 완료"
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
