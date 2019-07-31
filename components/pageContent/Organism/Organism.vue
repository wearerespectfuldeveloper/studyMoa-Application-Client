<script>
import classes from '@/assets/js/organism.js';
import { mapState } from 'vuex';

// ----------------- 유기체 조립하기

// 분자 컴포넌트들 생성하기 - prop 안 넘겨준건 기본 동작으로 그냥 생성만 하도록 해야겠는걸

const inputBarWithFilter = new classes.Cell("InputBarWithFilter", "input-molecule-control", {
  icon: "edit"
});

const contentHeader = new classes.Cell("ContentHeader", "content-header-molecule-control", {
  buttonText: "클릭하기"
});


// 담을 유기체 생성하기
const searchOrganism = new classes.Organism("Basic", "organism-control");

searchOrganism.push_slot(inputBarWithFilter, "middle");
searchOrganism.push_slot(contentHeader, "middle");

contentHeader.set_props("buttonClickEvent", function () {
      console.log(this)
    });


// -----------------------------------------------



export default {
  data () {
    return {
      organism: null
    }
  },
  render (createElement) {
    this.organism = searchOrganism;

    console.log()

    inputBarWithFilter.set_props("text", this.$store.state.studyGroup.testText)

    

    return searchOrganism.start_rendering(createElement, this.organism)
  },
  methods: {
    test_method () {
      this.organism.pop_slot();
    }
  }
}
</script>

<style lang="scss" scoped>
// 정렬에 관해서는 여기서 추가적으로 제어 가능
.organism-control {
  align-content: center;
}

.input-molecule-control {

}

.content-header-molecule-control {

}
</style>
