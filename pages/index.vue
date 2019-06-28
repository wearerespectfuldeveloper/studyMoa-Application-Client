<template>
  <div class="container full-height flex">
    <div class="category">

    </div>
    <div class="blocks full-width">
      <Block 
        v-for="block in blocks" :key="block.id"
        :title = block.title
        :desc = block.desc
      />
    </div>
  </div>
</template>

<script>
import Block from '@/components/pageContent/block';

export default {
  data () {
    return {
      blocks: [
        {title: '블록1', desc: 'Hellow World!', id: 0 },
        {title: '블록2', desc: 'Hellow World!', id: 1 },
        {title: '블록3', desc: 'Hellow World!', id: 2 },
        {title: '블록4', desc: 'Hellow World!', id: 3 },
        {title: '블록5', desc: 'Hellow World!', id: 4 },
        {title: '블록6', desc: 'Hellow World!', id: 5 }
      ]
    }
  },
  components: {
    Block
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include container-scroll-y
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

.blocks {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
</style>
