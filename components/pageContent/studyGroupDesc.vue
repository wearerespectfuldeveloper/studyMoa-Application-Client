<template>
  <div>
    <h4>
      <b>{{title}}</b>
    </h4>
    <p>
      우리에 갇힌 다람쥐가 자유롭게 뛰놀지 못하고 우리 속의 쳇바퀴만을 돌리는 것을 비유하여 사람이 단조롭고 같은 일을 매일같이 하여 생활의 변화가 없을 때 하는 말.
    </p>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

div {
  padding: 10px 20px 10px 20px;
  h4 {
    margin-bottom: 10px;
  }
  p {      
    font-size: 12px;
  }
}


</style>
