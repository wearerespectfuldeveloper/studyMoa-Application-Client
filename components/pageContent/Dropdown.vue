<template>
  <div class="dropdown-container"
    :style="{'width': width, 'height': height}"
  >
    <label for=""><i class="fas fa-sort-amount-down"></i></label>
    <select name="정렬 기준" id="">
      <option v-for = "category in categories" :key = "category.value" :value = "category.value">{{category.name}}</option>
    </select>
  </div>
</template>
  

<script>
import { molecule } from "@/assets/vueMixins/localMixins";

export default {
  mixins: [molecule],
  props: {
    categories: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  select {
    border: 0.5px solid grey;
    color: $darkText;
    margin-left: 10px;
    padding: 5px 5px 10px 5px;
    cursor: pointer;
    option {
      padding: 5px 5px 10px 5px;

    }
  }
}
</style>
