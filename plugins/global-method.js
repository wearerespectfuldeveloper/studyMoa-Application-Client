import Vue from 'vue';

// 템플렛 데이터 전환 혹은 초기화 메서드 등록

let templateLoad = {
  install: (Vue) => {
    Vue.prototype.$templateLoad = (createElement, template) => {
      let organisms = template.map((x) => {

        console.log(x.slots)

        const slotList = x.slots.map(s => createElement('component', { 
          is: s.component,
          key: s.component,
          slot: s.slotName,
          props: s.props,
          on: s.on,
          nativeOn: s.nativeOn
        }));
  
        return createElement('component', 
          // 템플릿 배열 안의 객체들마다 createElement 실행
          {
            is: x.name,
            key: x.name,
            class: x.class,
            props: x.props,
            on: x.on,
            nativeOn: x.nativeOn
          },
          slotList
        )}

      )
      
      return createElement('transition-group', {
        class: "page-container",
        attrs: {
          name: 'fade',
          mode: 'out-in',
          tag: 'div'
        }
      }, organisms);
    }
  }
}

Vue.use(templateLoad);



