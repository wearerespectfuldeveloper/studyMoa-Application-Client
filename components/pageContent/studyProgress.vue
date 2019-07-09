<template>
  <div class="studyProgress-container">
    <div class="meta">
      <h3 class="title">스터디 진행기록</h3>
    </div>
    <div class="blocks">
      <Block 
        v-for="progress in progresses" 
        :key="progress.id"
        :width="'100%'"
      >
        <div slot="left-sector" class="week-and-done">
          <h5 class="week">{{progress.week}}</h5>
          <h6 class="done">{{progress.done}}</h6>
        </div>
        
        <div slot="right-sector" class="date-and-time">
          <span class="date">{{progress.date}}</span>
          <span class="time">{{progress.time}}</span>
        </div>

      </Block>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progresses: [
        {id: 0, week: '1주차', done: '자기 소개 및 역할 분담', host: '피카츄', date: '2019.05.15', time: '10:56AM'},
        {id: 1, week: '2주차', done: '사전 자료 조사', host: '피카츄', date: '2019.05.15', time: '10:56AM'},
        {id: 2, week: '3주차', done: '기획 설계', host: '라이츄', date: '2019.05.15', time: '10:56AM'} 
      ]
    }
  },
  components: {
    Block: () => import('@/components/pageContent/block/block')
  }
}
</script>

<style lang="scss" scoped>
.studyProgress-container {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 20px;

  .meta {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    .title {
      padding: 10px 0 10px 0;
    }
  }

  .blocks {
    display: flex;
    flex-flow: column;
    align-items: center;

    .week-and-done {
      width: 20%;
      height: 75px;
      display: flex;
      flex-flow: column;
      font-size: 14px;
      padding-left: 20px;
      justify-content: center;
      align-items: flex-start;

      @media screen and (max-width: 960px) {
        width: 40%;
      }
      .week {
        margin-bottom: 5px;
      }
    }

    .date-and-time {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
      align-items: center;

      @media screen and (max-width: 960px) {
        width: 60%;
      }

      .date {
        font-size: 12px;
        margin-right: 10px;
      }
      .time {
        font-size: 12px;
      }
    }
  }
}
</style>
