<template>
  <div class="studyProgress-container">
    <component :is="'ContentHeader'"
      :title = "headerTitle"
      :subtitle = "headerSubTitle"
      :buttonText = "headerButtonText"
    ></component>
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
import { molecule, withContentHeader } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule, withContentHeader],
  props: {
    progresses: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      
    }
  },
  components: {
    ContentHeader: () => import('@/components/pageContent/contentHeader'),
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
