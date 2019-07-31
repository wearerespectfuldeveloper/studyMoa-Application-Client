<template>
  <Basic
    :backgroundColor="'white'" 
    :showShadow="false"
    class="search-page-container"
  >
    <InputBarWithFilter
      slot="top"
      class="InputBarWithFilter"
      :width="'90%'"
    />

    <SelectboxListWithResultText 
      slot="middle"
      class="SelectboxListWithResultText"
      :width="'90%'"
      :resultText="resultText"
      :selectboxs="selectboxs"
    />

    <GridBlocks
      class="GridBlocks"
      slot="middle"
      :width="'90%'"
      :blocks="userBlocks"
    />

  </Basic>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data () {
    return {
      userBlocks: [
        {heading: 'person1', text: '프론트엔드', id: 0, imgSrc: "~/assets/img/avatar.png" },
        {heading: 'person2', text: '백엔드', id: 1, imgSrc: "~/assets/img/avatar.png"  },
        {heading: 'person1', text: '프론트엔드', id: 2, imgSrc: "~/assets/img/avatar.png"  },
        {heading: 'person2', text: '백엔드', id: 3, imgSrc: "~/assets/img/avatar.png"  },
        {heading: 'person1', text: '프론트엔드', id: 4, imgSrc: "~/assets/img/avatar.png"  },
        {heading: 'person2', text: '백엔드', id: 5, imgSrc: "~/assets/img/avatar.png"  }
      ],
      resultText: "적용된 검색 카테고리 : ",
      selectboxs: [
        {categoryName: "직업", options: [
          {value: 1, name: "프론트엔드"},
          {value: 2, name: "백엔드"},
          {value: 3, name: "디자이너"},
          {value: 4, name: "기획자"},
        ]},
        {categoryName: "선호 스터디", options: [
          {value: 1, name: "개발 스터디"},
          {value: 2, name: "기획 스터디"},
          {value: 3, name: "디자인 스터디"},
          {value: 4, name: "수학 스터디"},
        ]},
        {categoryName: "보유 기술", options: [
          {value: 1, name: "웹 프론트엔드"},
          {value: 2, name: "자바 백엔드"},
          {value: 3, name: "UI/UX 프로토타이핑"},
          {value: 4, name: "기획"},
        ]},
      ]
    }
  },
  fetch ({$axios, store}) {
    return $axios.get("/categories")
      .then(res => {
        store.commit("studyGroup/set_categories", res.data);
      }).
      then(() => {
        return $axios.get("/ha")
        .then(res => {
          store.commit("studyGroup/set_testText", res.data);
        })
      });
  },
  computed: {
    ...mapState('studyGroup', {
      categories: state => state.categories,
    })
  },
}
</script>

<style lang="scss" scoped>
.search-page-container {
  
}

.InputBarWithFilter {
  justify-self: center;
  align-self: center;
}

.SelectboxListWithResultText {
  justify-self: center;
  align-self: center;

}

.GridBlocks {
  justify-self: center;
  align-self: center;

}
</style>
