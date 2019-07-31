<template>
  <div :ref="'target'">
    {{categories}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('studyGroup', {
      categories: state => state.categories,
    })
  },

  mounted() {
    this.$ref.target.style;
  },
}
</script>
