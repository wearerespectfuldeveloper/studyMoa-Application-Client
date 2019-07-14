import Vue from 'vue';

// 템플렛 데이터 전환 혹은 초기화 메서드 등록

let templateLoad = {
  install: (Vue) => {
    Vue.prototype.$templateLoad = (createElement, template) => {
      let organisms = template.map((x) => {
      
        const slotList = x.slots.map(s => createElement('component', { 
          is: s.component,
          slot: s.slotName,
          props: s.props
        }));
  
        return createElement('component', 
          // 템플릿 배열 안의 객체들마다 createElement 실행
          {
            is: x.name,
            class: x.class,
            props: x.props,
          },
          slotList
        )}
      )
  
      return createElement('div', 
        {
          class: "page-container"
        },
        organisms
      );
    }
  }
}

Vue.use(templateLoad);



