<template>
  <div class="studyProgress-container">
    <div class="meta">
      <h3 class="title">스터디 진행기록</h3>
        
    </div>
    
  </div>
</template>

<script>
export default {
  
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
}
</style>
