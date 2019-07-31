<template>
  <div class="selectbox-list-with-result-text" :style="computedStyle">
    <label class="resultText">{{resultText}}</label>
    <div class="selectboxs">
      <select class="selectbox" v-for="selectbox in selectboxs" :key="selectbox.id">
        <option class="option" value="0">{{selectbox.categoryName}}</option>
        <option v-for="option in selectbox.options" :key="option.value" :value="1">{{option.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins';

export default {
  mixins: [molecule],
  props: {
    resultText: {
      type: String,
      default: "라벨"
    },
    selectboxs: {
      type: Array,
      default: function () {
        return [
          {id: 0, categoryName: "기준", options: [
            {value: "1", name: "옵션1"}
          ]}
        ]
      }
    }
  },
  computed: {
    computedStyle () {
      return {'width': this.width, 'height': this.height}
    }
  }
}
</script>

<style lang="scss" scoped>
.selectbox-list-with-result-text {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 20px 0;

  .resultText {
    @include boldLabel;
  }
  .selectboxs {
    display: flex;
    justify-content: flex-end;
    .selectbox {
      @include selectboxBasic;
      margin-right: 10px;
    }
  }
  

  .option {

  }
}
</style>
