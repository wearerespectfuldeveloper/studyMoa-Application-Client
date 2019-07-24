<template>
  <div class="grid-block-container"
    :style="{'width': width, 'height': height}"
  >

    <div class="grid-block" 
      v-for="block in blocks" 
      :key="block.id"
      :style="{'width': blockWidth, 'height': blockHeight}"
    >
      <div class="grid-row">
        <div class="grid-col-label">{{block.label}}</div>
        <div v-if="block.type == 'input'"><input type="text" /></div>
        <div v-else><h6 class="grid-col-value">{{block.value}}</h6></div>
      </div>

    </div>
  </div>

  
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    blockWidth: {
      type: String,
      default: ''
    },
    blockHeight: {
      type: String,
      default: ''
    },
    blocks: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
        
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.grid-block-container {
  display: flex;
  flex-flow: column;

  .grid-block {
    display: flex;
    flex-flow: column;
    align-items: center;

    .grid-row {
      width: 100%;
      height: 50px;
      display: flex;
      flex-flow: row;
      font-size: 20px;
      align-items: flex-start;

      .grid-col-label{
        width: 35%;
        align-items: left;
        display: flex;
        flex-flow: row;
      }

      @media screen and (max-width: 960px) {
        width: 40%;
      }

    }

  }
}

</style>
