<script>
export default {
  data () {
    return {
      // template은 비동기로 가져올 예정
      template: [
        {
          name: 'PageHeader',
          props: {

          },
          class: {
            'page-header': true
          },
          slots: [
            {slotName: 'dropdown', component: 'Dropdown', props: {
              width: '90%',
              categories: [
                {
                  name: '카테고리1',
                  value: 1
                },
                {
                  name: '카테고리2',
                  value: 2
                }
              ]
            }}
          ]
        },
        {
          name: 'PageContent',
          props: {
            
          },
          class: {
            'page-content': true
          },
          slots: [
            {slotName: 'top', component: 'ThumnailBlocks', props: {
              width: '90%',
              blockHeight: '150px',
              isHorizontal: true,
              thumnailSectorSize: '20%',
              thumnailSectorMinSize: '200px',
              thumnailIcon: 'language',
              textSectorSize: '80%',
              clickEvent: function openModal () {
                location.href = "#open-modal";
              },
              blocks: [
                {title: '블록1', text: 'Hellow World!', id: 0 },
                {title: '블록2', text: 'Hellow World!', id: 1 },
                {title: '블록3', text: 'Hellow World!', id: 2 },
                {title: '블록4', text: 'Hellow World!', id: 3 },
                {title: '블록5', text: 'Hellow World!', id: 4 },
                {title: '블록6', text: 'Hellow World!', id: 5 }
              ],
            }}
          ]
        }
      ],
      
      members: [
        {name: 'person1', role: '프론트엔드', id: 0 },
        {name: 'person2', role: '백엔드', id: 1 }
      ]
    }
  },
  render(createElement) {
    return this.$templateLoad(createElement, this.template);
  },
  mounted() {
  },
  components: {
  }, 
  computed: {
  },
  components: {
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
// 전체 페이지 컨테이너(wrapper)
.page-container {
  @include container-scroll-y;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  height: 100%;
}

// 정렬 버튼 영역
.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}

// 블록 영역
.page-content {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
</style>
