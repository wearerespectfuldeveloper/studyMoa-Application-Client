<template>
  <div class="page-container full-height flex">
    <!-- 카테고리 버튼 -->
    <div class="arrange full-width">
      <Dropdown />
    </div>
    
    <!-- 스터디 그룹 블록들 -->
    <div class="blocks full-width">
      <component :is="'Block'"
        v-for="block in blocks" :key="block.id"
        :clickEvent="openModal"
        :width="'80%'"
        :height="'140px'"
      >
        <!-- 왼쪽 영역 컴포넌트-->
        <div slot="left-sector" class="thumnail">
          <component :is="'StudyGroupThumnail'"></component>
        </div>

        <!-- 중간 영역 컴포넌트-->
        <div slot="center-sector" class="text">
          <component 
            :is="'StudyGroupDesc'"
            :title = "block.title"
          ></component>
        </div>
      </component>
    </div>

    <!-- 모달 위치(장소는 상관없음. 어차피 안 보임) -->

    <component :is="'Modal'"
      :width = "'60%'"
      :height = "'80%'"
      :showButton = "false"
    >
      <component 
        :is="'StudyIntro'"
        class="modal-body-content"
        slot="content1"
      ></component>
      <component 
        :is="'StudyMember'" 
        class="modal-body-content"
        slot="content2"
        :members = "members"
      ></component>
      <component 
        :is="'StudyProgress'"
        class="modal-body-content"
        slot="content3"
      ></component>
    </component>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      blocks: [
        {title: '블록1', desc: 'Hellow World!', id: 0 },
        {title: '블록2', desc: 'Hellow World!', id: 1 },
        {title: '블록3', desc: 'Hellow World!', id: 2 },
        {title: '블록4', desc: 'Hellow World!', id: 3 },
        {title: '블록5', desc: 'Hellow World!', id: 4 },
        {title: '블록6', desc: 'Hellow World!', id: 5 }
      ],
      members: [
        {name: 'person1', role: '프론트엔드', id: 0 },
        {name: 'person2', role: '백엔드', id: 1 }
      ]
    }
  },
  computed: {
    ...mapState('inquire', {
      test: state => state.test
    })
  },
  components: {
    // 유기체 컴포넌트 import
    Block: () => import('@/components/pageContent/block/block'),
    Dropdown: () => import('@/components/pageContent/dropdown/dropdown'),
    Modal: () => import('@/components/pageContent/modal/modal'),

    // 분자 컴포넌트 import
    // 블록
    StudyGroupThumnail: () => import('@/components/pageContent/studyGroupThumnail'),
    StudyGroupDesc: () => import('@/components/pageContent/studyGroupDesc'),
    // 모달
    StudyIntro: () => import('@/components/pageContent/studyIntro'),
    StudyMember: () => import('@/components/pageContent/studyMember'),
    StudyProgress: () => import('@/components/pageContent/studyProgress')
  },
  methods: {
    openModal () {
      location.href = "#open-modal";
    }
  }
}
</script>

<style lang="scss" scoped>
// 전체 페이지 컨테이너(wrapper)
.page-container {
  @include container-scroll-y;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
}

// 정렬 버튼 영역
.arrange {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 10%;
  width: 80%;
}

// 블록 영역
.blocks {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  width: 100%;
  
  // 하나의 블록 안에서의 thumnail 컴포넌트
  .thumnail {
    width: 20%;
    @media screen and (max-width: 960px) {
      min-width: 30%;
    }
  }

  // 하나의 블록 안에서의 text 컴포넌트
  .text {
    width: 70%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }
}
</style>
