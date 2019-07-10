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
      우리에 갇힌 다람쥐가 자유롭게 뛰놀지 못하고 우리 속의 쳇바퀴만을 돌리는 것을 비유하여 사람이 단조롭고 같은 일을 매일같이 하여 생활의 변화가 없을 때 하는 말.
    </p>
  </div>
  
</template>

<script>
import { molecule, withContentHeader } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule, withContentHeader],
  components: {
    ContentHeader: () => import('@/components/pageContent/contentHeader')
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
