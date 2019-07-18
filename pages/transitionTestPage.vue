
<script>
export default {
  data () {
    return {
      show: true,
      testList: []
    }
  },
  render (h) {
    if (this.show == true) {
      return h('div', [

        h('button', {on: {click: () => {this.show = !this.show}}}, '클릭!'),

        h('transition-group', {attrs: {name: 'fade', mode:"out-in"}}, [
          h('component', {
            is: 'TestFile1',
            key: 'Test1'
          }),
          h('component', {
            is: 'TestFile2',
            key: 'Test2'
          })

        ])
      ])
    } else {
      return h('div', [

        h('button', {on: {click: () => {this.show = !this.show}}}, '클릭!'),

        h('transition-group', {attrs: {name: 'fade', mode:"out-in"}}, [
          h('component', {
            is: 'TestFile3',
            key: 'Test3'
          }),
          h('component', {
            is: 'TestFile2',
            key: 'Test2'
          }),
          h('component', {
            is: 'TestFile1',
            key: 'Test1'
          }),
          

        ])
      ])
    }
    
  },
  
}
</script>

<style lang="scss" scoped>

</style>

