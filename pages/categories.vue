<template>
  <div class="">
    <Organism></Organism>
    {{categories}}
  </div>
  
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  fetch ({$axios, store}) {
    return $axios.get("/categories")
      .then(res => {
        store.commit("studyGroup/set_categories", res.data)
      });
  },
  computed: {
    ...mapState('studyGroup', {
      categories: state => state.categories
    })
  },
}
</script>

<style lang="scss" scoped>

</style>
