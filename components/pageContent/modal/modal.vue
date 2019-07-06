<!-- 

개괄
 - width 값과 height 값을 전달 받아 모달의 크기를 결정하며,
모달의 header, body, footer 부분에 들어갈 컴포넌트를 슬롯을 전달 받아 조립되어 구성됩니다. body 부분은 슬롯으로 내용이 결정됩니다. 총 5개의 컨텐츠가 body 부분에 들어갈 수 있도록 되어 있습니다. 5개 이하는 괜찮지만 5개 이상은 슬롯으로 넘기려 해도 내용이 들어가지 않습니다.

API
 - width : 모달의 너비
 - height : 모달의 높이
 - header-ratio : 전체 높이에서 헤더가 차지하는 비율
 - body-ratio : 전체 높이에서 바디가 차지하는 비율
 - footer-ratio : 전체 높이에서 footer가 차지하는 비율

컴포넌트 구조
 - header
 - body(슬롯을 통한 컨트롤)
  - content 1 ~ 5
 - footer

-->

<template>
  <div>
    <!-- 버튼 부분 -->
    <div class="block-buttons">
      <a href="#open-modal" class="modal-button">상세보기</a>
    </div>

    <!-- 모달 부분 -->
    <div id="open-modal" class="modal-window">
      <div 
        class="modal-dialog" 
        :style="{'width': width, 'height': height}">

        <!--모달 헤더-->
        <component :is="'ModalHeader'"
          class="modal-header"
        ></component>
        
        <!--모달 바디-->
        <div class="modal-body">
          <slot name="content1"></slot>

          <slot name="content2"></slot>

          <slot name="content3"></slot>

          <slot name="content4"></slot>

          <slot name="content5"></slot>
        </div>

        <component :is="'ModalFooter'"
          class="modal-footer"
        ></component>

        <!--모달 푸터-->
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  props: {
    width: {
      type: String,
      default: "60%"
    },
    height: {
      type: String,
      default: "60%"
    }
  },
  components: {
    // 구성요소 import
    ModalHeader: () => import('@/components/pageContent/modal/modalHeader'),
    ModalFooter: () => import('@/components/pageContent/modal/modalFooter'),
    
  }
}
</script>

<style lang="scss" scoped>

// 모달 여는 버튼
.block-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  .modal-button {
    @include text-anchor-button($modalOpenButtonColor);
  }

  .ghost-button:hover {
    color:black;
  }
}

// 모달 창
.modal-window{
  position: fixed;
  background-color: rgba(1, 1, 1, 0.15);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  &:target {
    opacity: 1;
    pointer-events: auto;
  }
  .modal-dialog {
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 70px auto;
    background: white;
    color: #444;

    .modal-header {
      width: 100%;
      height: 10%;
    }

    .modal-body {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 100%;
      height: 80%;
      @include container-scroll-y;

    }

    .modal-footer {
      width: 90%;
      height: 10%;
    }
  }
}

</style>
