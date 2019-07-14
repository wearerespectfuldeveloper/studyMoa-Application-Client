<template>
<!-- 참여하기 버튼은 이미 참여한 상태라면 보이지 않게 설정할 예 -->
  <div class="study-intro-container">
    <component :is="'ContentHeader'"
      :title = "headerTitle"
      :subTitle = "headerSubTitle"
      :buttonText = "headerButtonText"
    >
    </component>
    <p class="text">
      {{mainText}}
    </p>
  </div>
  
</template>

<script>
import { molecule, withContentHeader } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule, withContentHeader],
  props: {
    mainText: {
      type: String,
      default: ''
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>

.study-intro-container {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 90%;

  .text {
    padding-top: 20px;
    font-size: 14px;
  }
}
</style>
