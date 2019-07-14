<template>
  <div class="text-block-container">
    <div class="week-and-done">
      <h5 class="week">{{progress.week}}</h5>
      <h6 class="done">{{progress.done}}</h6>
    </div>
    
    <div class="date-and-time">
      <span class="date">{{progress.date}}</span>
      <span class="time">{{progress.time}}</span>
    </div>
  </div>
</template>

<script>
import { molecule } from '@/assets/vueMixins/localMixins'

export default {
  mixins: [molecule],
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
  }
}
</script>

<style lang="scss" scoped>
.text-block-container {
  
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

</style>
