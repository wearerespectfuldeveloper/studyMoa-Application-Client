<template>
  <div class="block-container">
    <div class="block-content">
      <div class="category-thumnail"></div>
      <h4><b>{{title}}</b></h4> 
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.block-container {
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2);
  background-color: white;
  margin-bottom: 10px;
  width: 80%;
  transition: 0.3s;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
  }
}

.block-content {
  padding: 2px 16px;
}

</style>
