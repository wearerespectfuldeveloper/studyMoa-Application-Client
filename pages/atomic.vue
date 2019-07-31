<template>



  <div class="search-page-container">

    <InputBarWithFilter />

    <InputBarWithFilter 
      :icon="'edit'"
      :showSelectbox="false"
    />

    <InputBarWithFilter 
      :labelText="'라벨'"
      :inputStyle="'input-with-border-bottom'"
      :showSelectbox="false"
      :showLabel="true"
      :showIcon="false"
    />

    <InputBarWithFilter 
      :inputStyle="'input-with-border-bottom'"
      :iconStyle="'input-icon'"
      :showSelectbox="false"
    />
    

    

    <!-- 반복되는 태그가 있는 분자에는 container를 사용 -->
    

  </div>

</template>

<script>
export default {

  props: {
    icon: {
      type: String,
      default: 'search'
    },
    showSelectbox: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      default: function () { 
        return [
          {id: 1, value: 1, name: 'option1'},
          {id: 2, value: 2, name: 'option2'},
          {id: 3, value: 3, name: 'option3'},
          {id: 4, value: 4, name: 'option4'},
          {id: 5, value: 5, name: 'option5'},
        ]
      }
    }
  },
  

  layout: 'plain',
}
</script>

<style lang="scss" scoped>

// 그림자와 같은 가변요소도 클래스로 하고 넣었다 뺐다 할수 있게 하자

// padding, margin도 제어할 수 있게 해야할까. 어쨌든, 점진적으로 추가할 수 있는 형태니까 커스텀할 여지도 있겠지

.search-page-container {

  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  // 음 메인태그1 - with 가변태그 - 메인태그2

  .input-bar-with-filter {

    display: flex;

    .input-with-icon {
      display: flex;
      margin-right: 10px;

      .input-icon {
        background-color: skyblue;
        color: white;
        padding: 10px;
        border: none;  
      }

      .input {
        width: 400px;
        border: 1px solid rgba($color: #6b6b6b, $alpha: 0.3);
        padding: 10px;
      }

    }
    
    .selectbox {
      padding: 10px;
      border: 1px solid rgba($color: #6b6b6b, $alpha: 0.3);
    }
  }

  .selectbox-list-with-result-text {
    display: flex;
    width: 70%;
    justify-content: space-between;

    .label {
      padding: 10px;
      font-weight: 600;
    }

    .selectbox {
      padding: 10px;
      border: none;
      border-bottom: 1px solid rgba($color: #6b6b6b, $alpha: 0.3);

      &:focus {
        outline: none;
      }
    }
  }

  .descriptive-block-with-img-container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    .descriptive-block-with-img {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center; 
      padding: 10px;

      .img {
        width: 100px;
      }

      .heading {
        font-size: 24px;
      }

      .text {
        font-size: 15px;
      }

    }
  }
  
  // 동사가 앞에 오도록
  .box-shadow {
    @include block-shadow;
  }
}



</style>
