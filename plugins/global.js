import Vue from 'vue';

// 글로벌 컴포넌트
const molecule_import = (molecules) => {
  for (molecule in molecules) {
    Vue.component(import('@/components/pageContent/' + molecule));
  }
}

const global_molecules = [
  'contentHeader', 
  'block', 
  'verticalBlock', 
  'sidebarList', 
  'studyGroupDesc', 
  'studyGroupThumnail', 
  'studyIntro', 
  'studyMember', 
  'studyProgress', 
  'userInfo', 
  'userInterest'
]

molecule_import(global_molecules)


// 글로벌 믹스인 (사용하지 않기를 권고함)
import { } from '@/assets/vueMixins/globalMixins'



