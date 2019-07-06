<template>
  <div class="wrapper">
    <label for="" v-if="type == '요청받음'"><b>요청받음</b></label>
    <label for="" v-if="type == '요청함'"><b>요청함</b></label>
    <li class="dropdown-list">
      <p>{{text}}</p>
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-flow: column;
  padding: 5px 0px 0px 0px;
  -moz-transition: background-color 0.3s;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eee
  }
}

.dropdown-list {
  padding: 0px 10px 5px 10px;
  @include thin-border-bottom;
  p {
    font-size: 12px;
    color: $thickDarkText;
    cursor: pointer;
  }
}
label {
  font-size: 12px;
  color: $thickDarkText;
  padding: 0px 10px 0px 10px;
} 
</style>
