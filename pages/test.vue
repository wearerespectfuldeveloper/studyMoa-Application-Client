<template>
  <div>
    <h1>hey!</h1>
    <div v-for="data in datas" :key="data.id">
      <h1>{{data.testData}}</h1>
      <button @click="post_data">postData</button>
      <button @click="get_data">getData</button>
      <button @click="delete_data(data.id)">deleteData</button>
      <button @click="update_data(data.id)">updateData</button>

    </div>
  </div>
  
  
</template>

<script>
export default {
  data () {
    return {
      datas: []
    }
  },
  created() {

    this.$axios.get('https://studymoa-application.firebaseio.com/test.json')
    .then((res) => {
      
      console.log(res.data)

      const datas = []

      for (let key in res.data) {
        const data = res.data[key]
        data.id = key
        datas.push(data);
      }

      this.datas = datas

    }).catch((err) => {
      console.log(err);
    })
  },
  computed: {
  },
  methods: {
    post_data () {
      this.$axios.post('https://studymoa-application.firebaseio.com/test.json', {
        testData: 'just Added!'
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    },
    get_data () {
      this.$axios.get('https://studymoa-application.firebaseio.com/test.json')

      .then((res) => {
        
        console.log(res.data);

        const datas = [];

        for (let key in res.data) {
          const data = res.data[key]
          data.id = key
          datas.push(data);
        }

        this.datas = datas;

      }).catch((err) => {
        console.log(err);
      })
    },
    update_data (id) {
      this.$axios.put('https://studymoa-application.firebaseio.com/test.json/'+id, {testData: 'just got updated!'})
      .then((res) => {
        
        console.log(res);
        

      }).catch((err) => {
        console.log(err);
      })
    },
    delete_data (id) {
      this.$axios.delete('https://studymoa-application.firebaseio.com/test.json/'+id)
      .then((res) => {
        
        console.log(res);

      }).catch((err) => {
        console.log(err);
      })
    },
  }
}
</script>
