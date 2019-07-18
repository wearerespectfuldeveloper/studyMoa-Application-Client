<template>
  <div 
    class="checklist-container"
    :style="{'width': width, 'height': height}"
  >
    <div class="checklist" v-for="checklist in checklists" :key="checklist.id">
      <div class="checkbox-and-title">
        <input class="checkbox" type="checkbox" name="" id="" />
        <label class="title" for="">{{checklist.title}}</label>
      </div>
      
      <p class="desc">{{checklist.desc}}</p>
    </div>
  </div>  
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    checklists: {
      type: Array,
      default: function () {
        return [
          {id: 0, title: '역할', desc: '설명'},
          {id: 1, title: '역할', desc: '설명'},
          {id: 2, title: '역할', desc: '설명'},
          {id: 3, title: '역할', desc: '설명'},
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checklist-container {
  display: flex;
  flex-flow: column;
  align-items: center;

  .checklist {
    display: flex;
    flex-flow: column;
    justify-content: center;

    .checkbox-and-title {
      display: flex;
      flex-flow: row;
      align-items: center;
      border-bottom: 1px solid grey;

      .checkbox {
        @include biggerCheckbox;
        margin-right: 10px;
      }

      .title {
        @include boldLabel;
      }

    }
    
    .desc {
      padding: 10px 0 10px 0;
    }
  }
}
</style>
