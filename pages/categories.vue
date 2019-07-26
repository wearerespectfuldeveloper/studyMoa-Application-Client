<template>
  <div class="">
    <h1 v-for="k in data" :key="k.idx">
      {{k.title}}
    </h1>
    <h1>{{status}}</h1>

    <Organism></Organism>
  </div>
  
</template>

<script>
export default {
  asyncData(context) {
    console.log(context)
    return context.$axios.get(this.getURL)
    .then((res) => {
      const dataObj = {}
      dataObj.data = res.data;
      dataObj.status = res.status;

      return dataObj;
    });
  },
}
</script>

<style lang="scss" scoped>

</style>
