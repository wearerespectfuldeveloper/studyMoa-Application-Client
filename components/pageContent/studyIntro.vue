
<template>

<!-- 참여하기 버튼은 이미 참여한 상태라면 보이지 않게 설정할 예 -->
  <div class="study-intro-container">
    <div class="meta">
      <div class="row">
        <h3 class="title">스터디 그룹 소개</h3>
        <span class="personnel">인원: 4 / 6</span>
      </div>
        
      <a href="#" class="participate-button">참여하기</a>
      
    </div>
    <p class="text">
      우리에 갇힌 다람쥐가 자유롭게 뛰놀지 못하고 우리 속의 쳇바퀴만을 돌리는 것을 비유하여 사람이 단조롭고 같은 일을 매일같이 하여 생활의 변화가 없을 때 하는 말.
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.study-intro-container {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;
    width: 90%;
    .row {
      display: flex;
      align-items: center;
    }

    .title {
      padding: 10px 0 10px 0;
      margin-right: 10px;
    }

    .personnel {
      font-size: 12px;
      padding: 10px 0 10px 0;
    }

    .participate-button {
      @include text-anchor-button($studyIntroParticipateButton);
      @include button-color-transition($studyIntroParticipateButton, white);
      font-size: 12px;
      padding: 10px;
    }
  }

  .text {
    width: 90%;
    padding-top: 20px;
    font-size: 14px;
  }
}
</style>
