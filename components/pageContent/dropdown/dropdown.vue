<template>
  <div>
    <label for=""><i class="fas fa-sort-amount-down"></i></label>
    <select name="정렬 기준" id="">
      <option value="1">최신 순</option>
      <option value="2">기타</option>
      <option value="3">기타</option>
      <option value="4">기타</option>
      <option value="5">기타</option>
      <option value="6">기타</option>
    </select>
  </div>
</template>
  

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  select {
    width: 100px;
    border: 0.5px solid grey;
    color: $darkText;
    padding: 5px 5px 10px 5px;
    cursor: pointer;
  }
</style>
